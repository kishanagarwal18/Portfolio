import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-light-100 dark:bg-dark-200 shadow-md">
      <div className="max-w-7xl mx-auto pl-0 pr-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center -ml-8">
            <NavLink
              to="/"
              className="text-3xl font-heading font-bold text-dark-900 dark:text-light-100"
            >
              Portfolio
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            {/* Changed About link to "/" */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'text-gold-500 dark:text-gold-400'
                  : 'text-dark-600 dark:text-light-400 hover:text-gold-500 dark:hover:text-gold-400'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'text-gold-500 dark:text-gold-400'
                  : 'text-dark-600 dark:text-light-400 hover:text-gold-500 dark:hover:text-gold-400'
                }`
              }
            >
              Resume
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'text-gold-500 dark:text-gold-400'
                  : 'text-dark-600 dark:text-light-400 hover:text-gold-500 dark:hover:text-gold-400'
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'text-gold-500 dark:text-gold-400'
                  : 'text-dark-600 dark:text-light-400 hover:text-gold-500 dark:hover:text-gold-400'
                }`
              }
            >
              Contact
            </NavLink>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-light-300 dark:hover:bg-dark-300 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gold-400" />
              ) : (
                <Moon className="w-5 h-5 text-dark-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
