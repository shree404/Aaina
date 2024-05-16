import {
  BrowserRouter,
  Route,Routes,
  Link
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductLehenga from "./Pages/ProductLehenga";
import Women from "./Pages/Women";
import WomenLehenga from "./Pages/WomenLehenga";
import WomenKurta from "./Pages/WomenKurta";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<LandingPage/>} />
      <Route path="/product-lehenga" element={<ProductLehenga/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/women-lehenga" element={<WomenLehenga/>} />
      <Route path="/women-kurta" element={<WomenKurta/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
