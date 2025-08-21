import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import This from '@/components/This';
import Update from '@/components/Update';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <This />
      {/* Added Update component below This component */}
      <Update />
      <Sidebar />
      <MobileNav />
      <main className="container-app md:ml-64 pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;