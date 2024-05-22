import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import ConnectWithUs from '../ContactUs/Connectus';


function MoreSection(){
    return(
        <>
        <h2 className='More-policies'>Policies</h2>
        <ListGroup>
        <Link to="/return-policy" className='More-link'><ListGroup.Item>Return Policy</ListGroup.Item></Link> 
        <Link to="/privacy" className='More-link'><ListGroup.Item>Privacy Policy</ListGroup.Item></Link>
        <Link to="/terms-condition" className='More-link'><ListGroup.Item>Terms and Condition</ListGroup.Item></Link>
        <Link to="/delivery-terms" className='More-link'><ListGroup.Item>Delivery Terms and Condition</ListGroup.Item></Link>   
    </ListGroup>

    <h2 className='More-policies'>About</h2>
    <ListGroup>
    <Link to="/aboutus" className='More-link'><ListGroup.Item>About Us</ListGroup.Item></Link> 
    </ListGroup>

    <h2 className='More-policies'>Others </h2>
    <ListGroup>
    <Link to="/contactus" className='More-link'><ListGroup.Item>Contact Us</ListGroup.Item></Link>
    <Link to="/faqs" className='More-link'><ListGroup.Item>FAQ</ListGroup.Item></Link> 
    </ListGroup>
        </>
    )
}

export default MoreSection;