import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shippingform from './ShippingForm';

function Shipping(){
    return(
        <>
        <Container>
            <Row>
                <Col>
                <Shippingform/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Shipping;