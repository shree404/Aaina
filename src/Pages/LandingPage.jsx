import Nav from "../Component/LandingPage/Nav";
import Hero from "../Component/LandingPage/Hero";
import NewProduct from "../Component/LandingPage/Newproduct";
import BestSeller from "../Component/LandingPage/BestSeller";
import Kurti from "../Component/LandingPage/Kurti";
import BrideGroom from "../Component/LandingPage/BrideGroom";

function LandingPage(){
    return(
        <>
        <Nav/>
        <Hero/>
        <NewProduct/>
        <BestSeller/>
        <Kurti/>
        <BrideGroom/>
        </>
    )
}

export default LandingPage;