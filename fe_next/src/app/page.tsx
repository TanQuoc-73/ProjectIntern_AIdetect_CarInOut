'use client';

import { useState, useEffect } from 'react';
import CameraFeed from '@/components/dashboard/CameraFeed';
import DetectionInfo from '@/components/dashboard/DetectionInfo';
import RecentDetections from '@/components/dashboard/RecentDetections';

export type Detection = {
  plate: string;
  timestamp: string;
  status: 'registered' | 'visitor';
};

// --- Giả lập dữ liệu ---
// Dữ liệu xe đã được đăng ký trước trong hệ thống
const registeredVehicles = new Set(['30F1-12345', '51G-01234']);
// Dữ liệu giả lập cho camera feed
const mockPlates = ['30F1-12345', '92A-67890', '51G-01234', '75B-56789', '29C-11122'];

export default function DashboardPage() {
  const [currentDetection, setCurrentDetection] = useState<Detection | null>(null);
  const [recentDetections, setRecentDetections] = useState<Detection[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(true);
  const [cameraStatus, setCameraStatus] = useState<'connected' | 'disconnected'>('connected');

  // Giả lập quá trình nhận diện biển số liên tục
  useEffect(() => {
    if (cameraStatus !== 'connected') return;

    const interval = setInterval(() => {
      setIsProcessing(true);
      
      // Tạo một khoảng chờ giả lập cho việc xử lý
      setTimeout(() => {
        const randomPlate = mockPlates[Math.floor(Math.random() * mockPlates.length)];
        const newDetection: Detection = {
          plate: randomPlate,
          timestamp: new Date().toLocaleTimeString('vi-VN'),
          status: registeredVehicles.has(randomPlate) ? 'registered' : 'visitor',
        };

        setCurrentDetection(newDetection);
        // Thêm vào đầu danh sách lịch sử, và chỉ giữ lại 5 mục gần nhất
        setRecentDetections(prev => [newDetection, ...prev].slice(0, 5));
        setIsProcessing(false);
      }, 1000); // Giả lập 1 giây xử lý

    }, 5000); // Cứ 5 giây lại có một xe mới

    return () => clearInterval(interval);
  }, [cameraStatus]);

  // --- Xử lý sự kiện từ component con ---
  const handleConfirm = (plate: string) => {
    console.log(`Confirmed plate: ${plate}`);
    // TODO: Thêm logic xử lý khi xác nhận (ví dụ: gọi API, mở barrier...)
    setCurrentDetection(null); // Reset sau khi xử lý
  };

  const handleSkip = () => {
    console.log('Skipped detection.');
    // TODO: Thêm logic xử lý khi bỏ qua
    setCurrentDetection(null); // Reset sau khi xử lý
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* === CỘT CHÍNH (BÊN TRÁI) - CAMERA FEED === */}
      <div className="lg:col-span-2">
        <CameraFeed status={cameraStatus} />
      </div>

      {/* === CỘT PHỤ (BÊN PHẢI) - THÔNG TIN & HÀNH ĐỘNG === */}
      <div className="lg:col-span-1 flex flex-col gap-6">
        <DetectionInfo isProcessing={isProcessing} detection={currentDetection} onConfirm={handleConfirm} onSkip={handleSkip} />
        <RecentDetections detections={recentDetections} />
      </div>
    </div>
  );
}