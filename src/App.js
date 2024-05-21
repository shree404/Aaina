import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductLehenga from "./Pages/ProductLehenga";
import Women from "./Pages/Women";
import WomenLehenga from "./Pages/WomenLehenga";
import WomenKurta from "./Pages/WomenKurta";
import PageNotFound from "./Pages/PageNotFound";
import AboutUsPage from "./Pages/AboutUsPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage/>} />,
      <Route path="/home" element={<LandingPage/>} />,
      <Route path="/product-lehenga" element={<ProductLehenga/>} />,
      <Route path="/women" element={<Women/>} />,
      <Route path="/women-lehenga" element={<WomenLehenga/>} />,
      <Route path="/women-kurta" element={<WomenKurta/>} />,
      <Route path="/aboutus" element={<AboutUsPage/>} />,
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
