'use client';

import { ClockIcon } from '@heroicons/react/24/outline';
import type { Detection } from '@/app/page'; // Import kiểu Detection từ file page.tsx

type RecentDetectionsProps = {
  detections: Detection[];
};

export default function RecentDetections({ detections }: RecentDetectionsProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <ClockIcon className="h-5 w-5 text-slate-400" /> Lịch sử quét gần đây
      </h3>
      <ul className="space-y-3">
        {detections.length > 0 ? detections.map((det, index) => (
          <li key={index} className="flex justify-between items-center bg-slate-800 p-2.5 rounded-lg"><span className="font-mono font-semibold text-slate-200">{det.plate}</span><span className="text-xs text-slate-400">{det.timestamp}</span></li>
        )) : <p className="text-sm text-slate-500 text-center py-4">Chưa có dữ liệu.</p>}
      </ul>
    </div>
  );
}