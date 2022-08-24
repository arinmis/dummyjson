import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/home";
import AboutUs from "./pages/about_us/about_us";
import ContactUs from "./pages/contact_us/contact_us";
import Services from "./pages/services/services";

const App = () => {
  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
