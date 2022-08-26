import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/home";
import AboutUs from "./pages/about_us/about_us";
import ContactUs from "./pages/contact_us/contact_us";
import Services from "./pages/services/services";
import ProductDetails from "./pages/product_details/product_details";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // TODO: handle error
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>...loading</p>;
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Routes>
            <Route index element={<Home products={products} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<p>Oops, there is nothing there :(</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
