import * as React from "react";
import { Link } from "react-router-dom";

type SidebarProps = {
  title?: string;
  subtitle?: string;
};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="bg-gray-800 w-64 min-h-screen p-4 text-white">

      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <Link
            to="/"
            className="block py-2 px-4"
          >
            Home
          </Link>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">
          <Link
            to="/profile"
            className="block py-2 px-4"
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
