import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../Assets/OrderSummary/img1.png";
import img2 from "../Assets/OrderSummary/img2.png";
import trash from "../Assets/OrderSummary/TrashOutline.svg";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import add from "../Assets/ProductLehenga/add.svg";
import subtract from "../Assets/ProductLehenga/remove.svg";
import { useState } from "react";
import whatsapp from "../Assets/ProductLehenga/whatsapp.svg";
import UserDetails from "./UserDetails";
import Offcanvas from "react-bootstrap/Offcanvas";

function OrderSummary() {
  // const [kurtiquantity, setkurtiQuantity] = useState(1);
  // const [lehengaquantity, setlehengaQuantity] = useState(1);

  // const decreaseValue = (item) => {
  //   if ( item  ==="kurti" && kurtiquantity > 1) {
  //     setkurtiQuantity(kurtiquantity - 1);
  //   }
  //   else if (item === "lehenga" && lehengaquantity > 1){
  //     setlehengaQuantity(lehengaquantity -1 );
  //   }
  // };

  // const increaseValue = (item) => {
  //   if (item === "kurti"){
  //   setkurtiQuantity(kurtiquantity + 1);
  //   }
  //   else if (item  === "lehenga"){
  //     setlehengaQuantity(lehengaquantity + 1);
  //   }
  // };
  const [visible, SetInvisible] = useState(true);

  const RemoveItem = () => {
    SetInvisible(false);
  };

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

  const lehengaprice = 6000;
  const kurtaprice = 3000;
  const discount = 0;

  let totalpriceofkurthi = () => {
    return kurtaprice * quantity;
  };

  let totalpriceoflehenga = () => {
    return lehengaprice * quantity;
  };

  let subtotal = parseInt(totalpriceofkurthi() + totalpriceoflehenga());
  let totalprice = subtotal - discount;

  return (
    <>
        <Container>
          {visible && (
            <Row>
              <Col md={3}>
                {" "}
                <img src={img1} alt="Image of Lehenga" />
              </Col>
              <Col>
                <p>
                  <span className="Order__name">
                    Purple Embroidered Lehenga
                  </span>{" "}
                  <span className="Order__price">
                    Rs. {totalpriceoflehenga()}
                  </span>
                </p>
                <p>
                  {" "}
                  <span className="Order__sizename"> Size:</span>{" "}
                  <span className="Order__size">XL</span>
                </p>
                <p>
                  <button
                    onClick={RemoveItem}
                    className="Order__remove__button"
                  >
                    {" "}
                    <img src={trash} alt="Remove icon" />{" "}
                    <span className="Order__remove">Remove</span>{" "}
                  </button>
                  <span>
                    {" "}
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        variant="secondary"
                        id="LehengaImages-description__button2"
                        onClick={decreaseValue}
                      >
                        <img src={subtract} alt="Remove icon" />
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
              </Col>
            </Row>
          )}
          <hr />
          {visible && (
            <Row>
              <Col md={3}>
                {" "}
                <img src={img2} alt="Image of Kurta" />
              </Col>
              <Col>
                <div>
                  <p>
                    <span className="Order__name1">Blue Embroidered kurti</span>{" "}
                    <span className="Order__price">
                      Rs. {totalpriceofkurthi()}
                    </span>
                  </p>
                  <p>
                    {" "}
                    <span className="Order__sizename"> Size:</span>{" "}
                    <span className="Order__size">XL</span>
                  </p>
                  <p>
                    <button
                      onClick={RemoveItem}
                      className="Order__remove__button"
                    >
                      {" "}
                      <img src={trash} alt="Remove icon" />{" "}
                      <span className="Order__remove">Remove</span>{" "}
                    </button>
                    <span>
                      {" "}
                      <ButtonGroup aria-label="Basic example">
                        <Button
                          variant="secondary"
                          id="LehengaImages-description__button2"
                          onClick={decreaseValue}
                        >
                          <img src={subtract} alt="Remove icon" />
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
          )}
          <hr />
          <Row className="xs:mt-5">
            <Col md={{ span: 6, order: 1 }} sm={6} xs={6}>
              <dt className="Order__priceing">Subtotal</dt>
            </Col>
            <Col className="ml-5" md={{ span: 6, order: 2 }} sm={6} xs={6}>
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
            <Col>
              <p className="Order__totalprice">Rs.{totalprice}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <button onClick={handleShow} className="Order__button">
                {" "}
                <img src={whatsapp} alt="Whatsapp icon" /> &nbsp; Proceed to
                WhatsApp Order
              </button>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                id="OrderSummary"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    {" "}
                    <span className="UserDetails__head">User Details</span>{" "}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <UserDetails Close={handleClose} />
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default OrderSummary;
