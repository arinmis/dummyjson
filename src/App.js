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
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // TODO: handle error
    axios.get(process.env.REACT_APP_BASE_URL).then((response) => {
      const productsObj = {};
      response.data.products.forEach(
        (product) => (productsObj[product.id] = product)
      );
      setProducts(productsObj);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>...loading</p>;
  // const newID =
  //   Number(Object.keys(products)[Object.keys(products).length - 1]) + 1;
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden	">
        <Header />
        <main>
          <Routes>
            <Route index element={<Home products={products} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/services"
              element={
                <Services
                  setProducts={setProducts}
                  newProductID={
                    Number(
                      Object.keys(products)[Object.keys(products).length - 1]
                    ) + 1
                  }
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetails products={products} setProducts={setProducts} />
              }
            />
            <Route path="*" element={<p>Oops, there is nothing there :(</p>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
