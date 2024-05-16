import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import trash from "../Assets/TrashOutline.svg";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import add from "../Assets/ProductLehenga/add.svg";
import remove from "../Assets/ProductLehenga/remove.svg";
import { useState } from "react";
import whatsapp from '../Assets/ProductLehenga/whatsapp.svg';
import UserDetails from "./UserDetails";
import Offcanvas from 'react-bootstrap/Offcanvas';

function OrderSummary() {
  const lehengaprice = 6000;
  const kurtaprice = 3000;

  let subtotal = lehengaprice + kurtaprice;
const discount = 0;

let totalprice= subtotal - discount;


  const [quantity, setQuantity] = useState(1);

  const decreaseValue = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseValue = () => {
    setQuantity(quantity + 1);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col md={3}>
              {" "}
              <img src={img1} alt="Image of Lehenga" />
            </Col>
            <Col>
              <div>
                <p>
                  <span className="Order__name">
                    Purple Embroidered Lehenga
                  </span>{" "}
                  <span className="Order__price">Rs. {lehengaprice}</span>
                </p>
                <p>
                  {" "}
                  <span className="Order__sizename"> Size:</span>{" "}
                  <span className="Order__size">XL</span>
                </p>
                <p>
                  {" "}
                  <img src={trash} alt="Remove icon" />{" "}
                  <span className="Order__remove">Remove</span>{" "}
                  <span>
                    {" "}
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        id="LehengaImages-description__button2"
                        onClick={decreaseValue}
                      >
                        <img src={remove} alt="Remove icon" />
                      </Button>
                      <Button
                        variant="secondary"
                        id="LehengaImages-description__button2"
                      >
                        {quantity}
                      </Button>
                      <Button
                        variant="secondary"
                        id="LehengaImages-description__button2"
                        onClick={increaseValue}
                      >
                        <img src={add} alt="Add icon" />
                      </Button>
                    </ButtonGroup>
                  </span>{" "}
                </p>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={3}>
              {" "}
              <img src={img2} alt="Image of Kurta" />
            </Col>
            <Col>
              <div>
                <p>
                  <span className="Order__name1">Blue Embroidered kurti</span>{" "}
                  <span className="Order__price">Rs. {kurtaprice}</span>
                </p>
                <p>
                  {" "}
                  <span className="Order__sizename"> Size:</span>{" "}
                  <span className="Order__size">XL</span>
                </p>
                <p>
                  {" "}
                  <img src={trash} alt="Remove icon" />{" "}
                  <span className="Order__remove">Remove</span>{" "}
                  <span>
                    {" "}
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        id="LehengaImages-description__button2"
                        onClick={decreaseValue}
                      >
                        <img src={remove} alt="Remove icon" />
                      </Button>
                      <Button
                        variant="secondary"
                        id="LehengaImages-description__button2"
                      >
                        {quantity}
                      </Button>
                      <Button
                        variant="secondary"
                        id="LehengaImages-description__button2"
                        onClick={increaseValue}
                      >
                        <img src={add} alt="Add icon" />
                      </Button>
                    </ButtonGroup>
                  </span>{" "}
                </p>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={{span:6, order:1}} sm={6} xs={6} >
              <dl>
                <dt className="Order__priceing">Subtotal</dt>
                <dt className="Order__priceing">Shipping</dt>
                <dt className="Order__priceing">Discount</dt>
              </dl>
            </Col>
            <Col className="ml-5" md={{span:6, order:2}}>
            <dl>
                <dt className="Order__priceing"> Rs.{subtotal}</dt>
                <dt className="Order__priceing">Will be calculated later</dt>
                <dt className="Order__priceing">Rs.{discount}</dt>
              </dl>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col><p className="Order__total">Total</p>
            </Col>
            <Col>
            <p className="Order__totalprice">Rs.{totalprice}</p></Col>
          </Row>
          <Row>
            <Col>
            <button onClick={handleShow} className="Order__button"> <img src={whatsapp} alt="Whatsapp icon" /> &nbsp; Proceed to WhatsApp Order</button>
            <Offcanvas show={show} onHide={handleClose} placement="end" id='OrderSummary'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <span  className="UserDetails__head" >User Details</span> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <UserDetails Close={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default OrderSummary;
