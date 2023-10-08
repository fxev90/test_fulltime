import * as React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  title?: string;
  subtitle?: string;
  onLogoClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle, onLogoClick }) => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <i onClick={onLogoClick} className="fab fa-github text-2xl"></i>  
          <span className="text-xl font-semibold">{title}</span>
        </div>
        {subtitle && <h2>{subtitle}</h2>}
        <nav className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-400">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
