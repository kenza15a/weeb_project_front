import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-[rgba(255,255,255,0.05)] p-4 flex justify-between  items-center rounded-lg w-[80%]  ">
      <div className="flex flex-row justify-start items-center gap-x-5">
        <Link to="/" className="text-white font-bold text-xl">
          Weeb
        </Link>
        <ul className="flex space-x-6 text-white">
          <li></li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-x-4">
        <Link to="/login" className="text-white hover:text-gray-400">
          Log In
        </Link>
        <Link to="/signup" className="btn-primary">
          Join Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
