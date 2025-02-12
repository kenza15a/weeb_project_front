import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Home/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

//testing routes
//const Home = () => <div className="bg-main h-screen text-white flex justify-center items-center">Home Page</div>;
const About = () => <div className="bg-main h-screen text-white flex justify-center items-center">About Us</div>;
const Contact = () => <div className="bg-main h-screen text-white flex justify-center items-center">Contact Page</div>;
const Login = () => <div className="bg-main h-screen text-white flex justify-center items-center">Login Page</div>;
const Signup = () => <div className="bg-main h-screen text-white flex justify-center items-center">Sign Up Page</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
