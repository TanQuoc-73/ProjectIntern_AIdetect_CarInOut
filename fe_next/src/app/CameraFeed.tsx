'use client';

import { VideoCameraSlashIcon } from '@heroicons/react/24/outline';

type CameraFeedProps = {
  status: 'connected' | 'disconnected';
};

export default function CameraFeed({ status }: CameraFeedProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg aspect-video relative flex items-center justify-center overflow-hidden">
      {/* Lớp phủ trạng thái camera */}
      <span
        className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 ${
          status === 'connected' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status === 'connected' ? 'bg-green-400' : 'bg-red-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${status === 'connected' ? 'bg-green-500' : 'bg-red-500'}`}></span>
        </span>
        {status === 'connected' ? 'Camera Cổng Chính: Đang hoạt động' : 'Camera Cổng Chính: Mất kết nối'}
      </span>

      {/* Nội dung video (hoặc placeholder) */}
      {status === 'connected' ? (
        <div className="text-center text-slate-500"><p className="font-mono text-lg">[ LIVE FEED ]</p><p className="text-sm">Luồng video trực tiếp từ camera</p></div>
      ) : (
        <div className="text-center text-red-400 flex flex-col items-center gap-3"><VideoCameraSlashIcon className="w-16 h-16" /><p className="font-semibold">Không thể tải luồng video</p><p className="text-sm text-slate-500">Vui lòng kiểm tra lại kết nối camera.</p></div>
      )}
    </div>
  );
}