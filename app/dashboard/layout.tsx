import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* 下面的div用于容纳侧边栏 */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* 下面的div用于容纳主内容区域 */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
