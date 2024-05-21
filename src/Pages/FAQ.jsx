import Nav from '../Component/LandingPage/Nav';
import Footer from '../Component/LandingPage/Footer';
import FAQBreadcrum from '../Component/FAQ/Breadcrum';
import FAQQuestions from '../Component/FAQ/questions';


function FAQPage(){
    return(
        <>
        <Nav/>
        <FAQBreadcrum/>
        <FAQQuestions/>
        <Footer/>
        </>
    )
}

export default FAQPage;