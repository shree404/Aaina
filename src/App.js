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
import TermsAndCondition from "./Pages/TermsAndConditionPage";
import FAQPage from "./Pages/FAQ";
import ContactUsPage from "./Pages/ContactUs";
import NoItem from "./Pages/NoItem";
import AccountPage from "./Pages/AccountPage";
import ShippingPage from "./Pages/Shippingpage";
import AuthPage from "./Pages/Authpage";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import OrderPage from "./Pages/OrderPage";

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
      <Route path="/terms-conditions" element={<TermsAndCondition/>} />,
      <Route path="/faqs" element={<FAQPage/>} />,
      <Route path="/contactus" element={<ContactUsPage/>} />,
      <Route path="/cart" element={<NoItem/>} />,
      <Route path="/account" element={<AccountPage/>} />,
      <Route path="/shipping" element={<ShippingPage/>} />,
      <Route path="/login" element={<AuthPage/>} />,
      <Route path="/forgot-password" element={<ForgetPasswordPage/>} />,
      <Route path="/order" element={<OrderPage/>} />,
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
