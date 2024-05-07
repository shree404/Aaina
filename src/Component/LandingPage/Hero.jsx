import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../Assets/LandingPage/hero.png';

function Hero(){
    return(
        <>
        <Container fluid>
            
            <Row>
                <Col md={12} sm={12} xs={12}>
                <img src={img} alt="Hero Image"  className='Hero-image'/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Hero;