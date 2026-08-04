import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import SplashScreen from '../Components/UI/SplashScreen';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SplashScreen />
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;