import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
