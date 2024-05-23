import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shippingform from './ShippingForm.jsx';
import BillingDetails from './BillingDetails.jsx';

function Shipping(){
    return(
        <>
        <Container>
            <Row className="justify-content-md-sm-xs-center">
                <Col md={5} xs={12} sm={12}>
                <Shippingform/>
                </Col>
                <Col md={4} xxs={12} sm={12}>
                <BillingDetails/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Shipping;