

import { Outlet } from 'react-router';

import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';




const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;