// @表示项目的根目录
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 动态获取 inter.className，'${}'（包含单引号）会被解析为JS表达式并求职 */}
      <body className={'${inter.className} antialiased'}>{children}</body>
    </html>
  );
}
