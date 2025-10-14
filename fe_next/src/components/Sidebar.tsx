'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChartBarIcon,
  ClockIcon,
  Cog6ToothIcon,
  HomeIcon,
  QueueListIcon, // Icon mới cho hàng chờ
  UsersIcon,     // Icon mới cho khách hàng
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Bảng điều khiển', href: '/', icon: HomeIcon },
    { name: 'Hàng chờ hôm nay', href: '/queue', icon: QueueListIcon },
    { name: 'Lịch sử ra vào', href: '/history', icon: ClockIcon },
    { name: 'Khách hàng', href: '/customers', icon: UsersIcon },
    { name: 'Báo cáo', href: '/reports', icon: ChartBarIcon },
    { name: 'Cài đặt', href: '/settings', icon: Cog6ToothIcon },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-gray-800 text-white flex flex-col">
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-gray-700">
        <h1 className="text-2xl font-bold">
          <span className="bg-blue-600 px-2 py-1 rounded">AI</span> Dealer
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Icon className="h-6 w-6 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer của Sidebar */}
      <div className="p-4 border-t border-gray-700">
          <p className="text-xs text-gray-400">© 2025 AI Dealer System</p>
      </div>
    </aside>
  );
}