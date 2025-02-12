import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../Button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[rgba(255,255,255,0.05)] p-4 flex justify-between items-center rounded-lg w-full md:w-[80%] relative">
      {/* Logo & Desktop Menu */}
      <div className="md:flex md:flex-row md:items-center md:gap-x-4">
        <Link to="/" className="text-white font-bold text-xl">
          Weeb
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-6 text-white">
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

      {/* Desktop Authentication Links */}
      <div className="hidden md:flex md:flex-row md:items-center space-x-4">
        <Link to="/login" className="text-white hover:text-gray-400">
          Log In
        </Link>
        <Link to="/signup" className="btn-primary">
          Join Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Button
        className="md:hidden text-white text-3xl"
        variant="accent"
        text={<FaBars size={20} />}
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Mobile Dropdown Menu with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} // Start faded & slightly above
            animate={{ opacity: 1, y: 0 }} // Fade in & move down
            exit={{ opacity: 0, y: -10 }} // Fade out & move up
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 right-4 bg-gray-800 text-white p-5 rounded-lg shadow-lg flex flex-col space-y-4 md:hidden"
          >
            <Link to="/about" className="hover:text-gray-400">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
            <Link to="/login" className="hover:text-gray-400">
              Log In
            </Link>
            <Link to="/signup" className="btn-primary">
              Join Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
