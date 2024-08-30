import { FaGithub } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <div className="absolute top-0 flex items-center justify-between px-2 md:px-5 p-2 md:h-20 w-full bg-gray-900 text-white">
      <div>
        <h1 className="md:text-xl">User Manager Software</h1>
        <small>by Sika©</small>
      </div>
      <div>
        <a href="">
          <FaGithub className="h-6 w-6 md:h-10 md:w-10" />
        </a>
      </div>
    </div>
  );
};

export default Header;
