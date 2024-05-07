import Nav from "../Component/LandingPage/Nav";
import Hero from "../Component/LandingPage/Hero";
import NewProduct from "../Component/LandingPage/Newproduct";
import BestSeller from "../Component/LandingPage/BestSeller";
import Kurti from "../Component/LandingPage/Kurti";
import BrideGroom from "../Component/LandingPage/BrideGroom";
import Testimonials from "../Component/LandingPage/Testimonials";
import Footer from "../Component/LandingPage/Footer";

function LandingPage(){
    return(
        <>
        <Nav/>
        <Hero/>
        <NewProduct/>
        <BestSeller/>
        <Kurti/>
        <BrideGroom/>
        <Testimonials/>
        <Footer/>
        </>
    )
}

export default LandingPage;