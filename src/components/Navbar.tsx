import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Briefcase, Home, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Praveen Kumar</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className={`flex items-center ${isActive('/')}`}>
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/projects" className={`flex items-center ${isActive('/projects')}`}>
              <Code2 className="h-5 w-5 mr-1" />
              <span>Projects</span>
            </Link>
            <Link to="/experience" className={`flex items-center ${isActive('/experience')}`}>
              <Briefcase className="h-5 w-5 mr-1" />
              <span>Experience</span>
            </Link>
            <Link to="/contact" className={`flex items-center ${isActive('/contact')}`}>
              <Mail className="h-5 w-5 mr-1" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;