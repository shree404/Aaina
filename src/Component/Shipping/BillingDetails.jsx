import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BillingDetails(){

    const subtotal = 180;
    const discount = 0;
    const totalprice = subtotal - discount;

    return(
        <>
        <div className="BillingDetails">
          <Row className="xs:mt-5">
            <Col className="mt-3 " md={{ span: 6, order: 1 }} sm={6} xs={6}>
              <dt className="Order__priceing">Subtotal</dt>
            </Col>
            <Col className="ml-5 mt-3" md={{ span: 6, order: 2 }} sm={6} xs={6}>
              <dt className="Order__priceing"> Rs.{subtotal}</dt>
            </Col>
          </Row>
          <Row className="xs:mt-5">
            <Col md={{ span: 6, order: 1 }} sm={6} xs={6}>
              <dt className="Order__priceing">Shipping</dt>
            </Col>
            <Col className="ml-5" md={{ span: 6, order: 2 }} sm={6} xs={6}>
              <dt className="Order__priceing">Will be calculated later</dt>
            </Col>
          </Row>
          <Row className="xs:mt-5">
            <Col md={{ span: 6, order: 1 }} sm={6} xs={6}>
              <dt className="Order__priceing">Discount</dt>
            </Col>
            <Col
              className="ml-5"
              md={{ span: 6, order: 1 }}
              sm={{ span: 6 }}
              xs={6}
            >
              <dt className="Order__priceing">Rs.{discount}</dt>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p className="Order__total">Total</p>
            </Col>
            <Col className="mr-5">
              <p className="Order__totalprice" id="billing-price">Rs.{totalprice} </p>
            </Col>
          </Row>
          </div>
        </>
    )
}

export default BillingDetails;