import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Laptop, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Laptop className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ProjectHub</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-700 hover:text-primary-600 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-700 hover:text-primary-600 transition-colors"
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/order" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-700 hover:text-primary-600 transition-colors"
              }
            >
              Order
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-700 hover:text-primary-600 transition-colors"
              }
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-700 hover:text-primary-600 transition-colors"
              }
            >
              Contact
            </NavLink>
            <Link 
              to="/order" 
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Order Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-primary-600 font-medium" 
                  : "block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-primary-600 font-medium" 
                  : "block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/order" 
              className={({ isActive }) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-primary-600 font-medium" 
                  : "block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Order
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={({ isActive }) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-primary-600 font-medium" 
                  : "block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-primary-600 font-medium" 
                  : "block px-3 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link 
              to="/order" 
              className="block px-3 py-2 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;