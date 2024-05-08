import {
  BrowserRouter,
  Route,Routes,
  Link
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductLehenga from "./Pages/ProductLehenga";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<LandingPage/>} />
      <Route path="/product-lehenga" element={<ProductLehenga/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
