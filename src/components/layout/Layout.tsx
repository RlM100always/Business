import { Outlet } from 'react-router-dom';
import PremiumNavbar from './PremiumNavbar';
import PremiumFooter from '../sections/PremiumFooter';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <PremiumNavbar />
      <main className="flex-grow pt-16 sm:pt-20">
        <Outlet />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Layout;