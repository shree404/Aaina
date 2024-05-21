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
import ReturnPolicyPage from "./Pages/ReturnPolicyPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import DeliveryTermsPage from "./Pages/DeliveryTermsPage";


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
      <Route path="/return-policy" element={<ReturnPolicyPage/>} />,
      <Route path="/privacy" element={<PrivacyPolicyPage/>} />,
      <Route path="/delivery-terms" element={<DeliveryTermsPage/>} />,
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
