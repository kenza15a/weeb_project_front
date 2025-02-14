import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/inter"; // Defaults to 400 weight

import Header from "./components/Home/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/HomePage/CotactPage/ContactPage";
import Authentication from "./pages/Authentication/Authentication";
import About from "./pages/About/About";
import ScrollButtons from "./components/ScrollButton/ScrollButton";


//testing routes
//const Home = () => <div className="bg-main h-screen text-white flex justify-center items-center">Home Page</div>;
//const About = () => <div className="bg-main h-screen text-white flex justify-center items-center">About Us</div>;
//const Contact = () => <div className="bg-main h-screen text-white flex justify-center items-center">Contact Page</div>;
//const Login = () => <div className="bg-main h-screen text-white flex justify-center items-center">Login Page</div>;
//const Signup = () => <div className="bg-main h-screen text-white flex justify-center items-center">Sign Up Page</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Authentication loginState="login" />} />
        <Route path="/signup" element={<Authentication loginState="register" />} />
      </Routes>
      <Footer />
      <ScrollButtons />
    </Router>

  );
}

export default App;
