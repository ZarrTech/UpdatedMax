import { Routes, Route, BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import AboutDetails from "./page/AboutDetails";
import Testimonials from "./components/Testimonials";
import Pbo from "./components/Pbo";
import Training from "./components/Training";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/more" element={<AboutDetails />} />
      </Routes>
      <Testimonials />
      <Pbo />
      <Training />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
