import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/inter"; // Defaults to 400 weight

import Header from "./components/Home/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/CotactPage/ContactPage";
import Authentication from "./pages/Authentication/Authentication";
import About from "./pages/About/About";
import ScrollButtons from "./components/ScrollButton/ScrollButton";
import BlogPage from "./pages/Blog/BlogPage";
import RegisterForm from "./components/Authentication/RegisterForm";
import PostDetail from "./components/Blog/PostDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<Authentication loginState="login" />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route
          path="/signup"
          element={<Authentication loginState="register" />}
        />
      </Routes>
      <Footer />
      <ScrollButtons />
    </Router>
  );
}

export default App;
