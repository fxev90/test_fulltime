import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="layout ">
        <QueryClientProvider client={queryClient}>
        <Header />
        <div className='flex'>
          <Sidebar title="hola pai" />
          <main className="layout-content bg-blue-50 min-h-screen">
            <Outlet />
        </main>
        </div>
        <Footer title="footer" />
        </QueryClientProvider>
    </div>
  );
};

export default Layout;

