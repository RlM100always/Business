import { Outlet } from 'react-router-dom';
import PremiumNavbar from './PremiumNavbar';
import PremiumFooter from '../sections/PremiumFooter';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PremiumNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Layout;