import { BrowserRouter } from "react-router-dom";
import Header from "./helpers/header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

export default App;
