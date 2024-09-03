import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <p className="text-sm">&copy; 2024 Naresh Vasikarla. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className="rounded-lg bg-white p-1">
              <FaGithub className="text-gray-900 hover:text-gray-500" />
            </span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <span className="rounded-lg bg-white p-1">
              <FaLinkedin className="text-gray-900 hover:text-gray-500" />
            </span>
          </a>
        </div>
      </div>
  );
};

export default Header;