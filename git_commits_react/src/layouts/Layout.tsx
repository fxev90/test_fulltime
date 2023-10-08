import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';




type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout ">
        <Header />
        <div className='flex'>
          <Sidebar title="hola pai" />
          <main className="layout-content bg-blue-50 min-h-screen">
            <Outlet />
        </main>
        </div>

        <Footer title="footer" />
    </div>
  );
};

export default Layout;

