'use client';

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import type { Detection } from '@/app/page'; // Import kiểu Detection từ file page.tsx

type DetectionInfoProps = {
  isProcessing: boolean;
  detection: Detection | null;
  onConfirm: (plate: string) => void;
  onSkip: () => void;
};

export default function DetectionInfo({ isProcessing, detection, onConfirm, onSkip }: DetectionInfoProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-6 flex-grow flex flex-col">
      <h3 className="text-lg font-bold text-white mb-4">Thông tin Nhận diện</h3>
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {isProcessing ? (
          <div className="w-full space-y-3">
            <div className="w-full h-16 mx-auto bg-slate-700 rounded-lg animate-pulse"></div>
            <div className="h-4 w-2/3 mx-auto bg-slate-700 rounded animate-pulse"></div>
            <p className="text-sm text-slate-500">Đang quét biển số...</p>
          </div>
        ) : detection ? (
          <div className="w-full">
            {/* Hiển thị biển số */}
            <div className="bg-slate-700 border-2 border-slate-600 rounded-lg py-3 mb-4">
              <p className="text-3xl font-bold text-white tracking-widest font-mono">
                {detection.plate}
              </p>
            </div>
            {/* Trạng thái xe */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-5 ${
              detection.status === 'registered' ? 'bg-blue-500/10 text-blue-400' : 'bg-amber-500/10 text-amber-400'
            }`}>
              {detection.status === 'registered' ? '✅ Khách hàng đã đăng ký' : '👤 Khách vãng lai'}
            </div>
            {/* Các nút hành động */}
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => onConfirm(detection.plate)} className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200">
                <CheckCircleIcon className="h-5 w-5" />
                Xác nhận
              </button>
              <button onClick={onSkip} className="flex items-center justify-center gap-2 w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold py-3 px-4 rounded-lg transition-all duration-200">
                <XCircleIcon className="h-5 w-5" />
                Bỏ qua
              </button>
            </div>
          </div>
        ) : (
          <p className="text-slate-500">Chưa phát hiện xe nào</p>
        )}
      </div>
    </div>
  );
}