import * as React from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  title?: string;
  subtitle?: string;
  onLogoClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({subtitle}) => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className=" mr-40 p-4 flex items-center justify-end">
        
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
