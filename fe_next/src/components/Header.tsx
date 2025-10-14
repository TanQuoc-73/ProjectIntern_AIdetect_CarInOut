'use client';

import { BellIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    // --- THAY ĐỔI CHÍNH ---
    // Nền: bg-white -> bg-slate-900 (giống Sidebar)
    // Đường viền: border-gray-200 -> border-slate-700
    <header className="h-20 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">
      
      {/* Chức năng tìm kiếm - Tinh chỉnh lại cho nổi bật hơn trên nền tối */}
      <div className="flex items-center bg-slate-800 rounded-lg px-3 py-2 w-1/3">
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" />
        <input
          type="text"
          placeholder="Tìm kiếm biển số xe, khách hàng..."
          // Chữ và placeholder đổi sang màu sáng
          className="ml-3 bg-transparent focus:outline-none text-slate-200 placeholder:text-slate-500 w-full"
        />
      </div>

      {/* Các icon chức năng bên phải */}
      <div className="flex items-center space-x-6">
        {/* Nút thông báo - Đổi màu icon và hiệu ứng hover */}
        <button className="relative text-slate-400 hover:text-white transition-colors duration-200">
            <BellIcon className="h-6 w-6"/>
            {/* Chấm đỏ thông báo vẫn giữ nguyên vì nó nổi bật */}
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-slate-900"></span>
        </button>

        {/* Nút User - Đổi màu icon và hiệu ứng hover */}
        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
            <UserCircleIcon className="h-8 w-8"/>
            <div className="hidden lg:flex flex-col text-left">
                <span className="text-sm font-semibold text-slate-200">Bảo vệ A</span>
                <span className="text-xs text-slate-400">Trực cổng chính</span>
            </div>
        </button>
      </div>
    </header>
  );
}