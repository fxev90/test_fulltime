import * as React from 'react';

type FooterProps = {
  title?: string;
  subtitle?: string;

};

const Footer: React.FC<FooterProps> = ({ title, subtitle }) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm">© 2023 MyApp</span>
        </div>
       
        {subtitle && <h2>{subtitle}</h2>}
        <nav className="flex space-x-4">
          <a href="#" className="text-sm text-white hover:text-gray-400">Terms</a>
          <a href="#" className="text-sm text-white hover:text-gray-400">Privacy</a>
          <a href="#" className="text-sm text-white hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
