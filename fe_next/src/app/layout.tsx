import type { Metadata } from "next";
// Sử dụng font Geist làm font chính cho toàn bộ trang
import { Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Sidebar from '@/components/Sidebar';

// Khởi tạo font Geist Sans cho văn bản thông thường
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Không cần Geist Mono nếu bạn không chủ động dùng nó cho code block, có thể bỏ đi cho gọn

export const metadata: Metadata = {
  // Cập nhật metadata cho chuyên nghiệp
  title: "Smart Welcome | Dashboard",
  description: "Hệ thống tiếp đón khách hàng thông minh ứng dụng AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/* SỬA LỖI & TỐI ƯU:
        1. Bỏ `inter.className` vì biến `inter` chưa được khởi tạo -> gây lỗi.
        2. Sử dụng `geistSans.variable` để áp dụng font Geist một cách chính xác.
        3. Chuyển sang theme tối (`bg-slate-900`, `text-slate-200`) để đồng bộ với Header & Sidebar.
      */}
      <body className={`${geistSans.variable} bg-slate-900 text-slate-200`}>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar cố định bên trái */}
          <Sidebar />

          {/* Vùng nội dung chính, bao gồm Header và trang con */}
          <div className="flex-1 flex flex-col">
            {/* Header phía trên */}
            <Header />

            {/* Vùng nội dung chính, có thể cuộn */}
            <main className="flex-1 overflow-y-auto p-6 bg-slate-800">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}