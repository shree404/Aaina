import Nav from "../Component/LandingPage/Nav";
import Footer from "../Component/LandingPage/Footer";
import Womenbreadcrum from "../Component/Women/Breadcrum";
import WomenFilterRed from "../Component/Women/FilterRed";

function Women(){
    return(
        <>
        <Nav/>
        <Womenbreadcrum/>
        <WomenFilterRed/>
        <Footer/>
        </>
    )
}

export default Women;