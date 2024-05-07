import Nav from "../Component/LandingPage/Nav";
import Hero from "../Component/LandingPage/Hero";
import NewProduct from "../Component/LandingPage/Newproduct";
import BestSeller from "../Component/LandingPage/BestSeller";

function LandingPage(){
    return(
        <>
        <Nav/>
        <Hero/>
        <NewProduct/>
        <BestSeller/>
        </>
    )
}

export default LandingPage;