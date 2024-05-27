import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import AllOrder from "./All";
import { useState } from "react";

function Order() {
const [order, setOrder] = useState("all")

  return (
    <>
      <div className="Order">
        <Container>
          <Row>
            <Col md={12}>
              <h1>My Orders</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={2} sm={3} xs={4}>
              {" "}
              <button onClick={()=> setOrder("all")} className={`Order-buttons ${order==="all" ? "order-button": ""}`}>All</button>
            </Col>
            <Col md={2} sm={3} xs={4}>
              <button onClick={()=> setOrder("topay")} className={`Order-buttons ${order==="topay" ? "order-button": ""}`}>To Pay</button>
            </Col>
            <Col md={2} sm={3} xs={4}>
              <button onClick={()=> setOrder("toship")} className={`Order-buttons ${order==="toship" ? "order-button": ""}`}>To Ship</button>
            </Col>
            <Col md={2} sm={3} xs={6}>
              <button onClick={()=> setOrder("toreceive")} className={`Order-buttons ${order==="toreceive" ? "order-button": ""}`}>To Receive</button>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
          <hr  className="Order-line"/>
          </Row>
          <Row>
            {order ==="all" && <AllOrder/> }
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Order;
