import img from '../Assets/notfound.png';
import { Link } from "react-router-dom";
import Nav from '../Component/LandingPage/Nav';
import Footer from '../Component/LandingPage/Footer';

function PageNotFound(){
    return(
        <>
        <Nav/>
        <div className="NotFound">
        <div>
        <img className="NotFound__image" src={img} alt="Page Not Found Image" />
        <h1 className="NotFound__head"> Page Not Found</h1> 
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
         <br />
         <Link to="/" className="NotFound__button">
         <button className="NotFound__button"> back to home</button> </Link>
         </div>
      </div>
        <Footer/>
        </>
    )
}

export default PageNotFound;