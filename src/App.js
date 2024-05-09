import {
  BrowserRouter,
  Route,Routes,
  Link
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductLehenga from "./Pages/ProductLehenga";
import Women from "./Pages/Women";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<LandingPage/>} />
      <Route path="/product-lehenga" element={<ProductLehenga/>} />
      <Route path="/women" element={<Women/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
