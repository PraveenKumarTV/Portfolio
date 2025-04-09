import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;