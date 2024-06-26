import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../Assets/ProductLehenga/1.png";
import img2 from "../../Assets/ProductLehenga/2.png";
import info from "../../Assets/ProductLehenga/info.svg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import add from "../../Assets/ProductLehenga/add.svg";
import remove from "../../Assets/ProductLehenga/remove.svg";
import whatsapp from "../../Assets/ProductLehenga/whatsapp.svg";
import LehengaDescription from "./description";
import InformationLehenga from "./Information";
import Offcanvas from "react-bootstrap/Offcanvas";
import OrderSummary from "../../Pages/orderSummary";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

function ProductImages({ placement }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [quantity, setQuantity] = useState(1);

  const decreaseValue = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseValue = () => {
    setQuantity(quantity + 1);
  };

  const [descType, setDescType] = useState("description");

  return (
    <>
      <div className="LehengaImages">
        <Container>
          <Row className="justify-content-sm-xs-center">
            <Col
              md={{ span: 1, order: 1 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              <div className="LehengaImages-col1">
                <div>
                  <ChevronUp/>
                </div>
                <div>
                  <img
                    className="LehengaImages__img"
                    src={img1}
                    alt="Image of Lehenga"
                  />{" "}
                </div>
                <div>
                  <img
                    className="LehengaImages__img"
                    src={img1}
                    alt="Image of Lehenga"
                  />{" "}
                </div>
                <div>
                  <img
                    className="LehengaImages__img"
                    src={img1}
                    alt="Image of Lehenga"
                  />{" "}
                </div>
                <div>
                  <img
                    className="LehengaImages__img"
                    src={img1}
                    alt="Image of Lehenga"
                  />
                </div>
                <div>
                  <ChevronDown className="LehengaImages__downarrow "/>
                </div>
              </div>
            </Col>
            <Col
              md={{ span: 6, order: 2 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
              <img
                src={img2}
                alt="Image of Lehenga"
                className="LehengaImages__imgbig"
              />
            </Col>
            <Col
              md={{ span: 5, order: 3 }}
              sm={{ span: 12, order: 3 }}
              xs={{ span: 12, order: 3 }}
            >
              <p className="LehengaImages-description">
                <span className=" LehengaImages-description__p1">
                  Purple Embroidered Lehenga Choli
                </span>{" "}
                <br /> <br />
                <span className="LehengaImages-description__p2">
                  Rs. 6000
                </span>{" "}
                <br />
                <span className="LehengaImages-description__p3">
                  Incl. of all tax
                  <img src={info} alt="Icon" />
                </span>{" "}
                <br /> <br />
                <span className="LehengaImages-description__p4">
                  In Stock
                </span>{" "}
                <br />
                <br />
                <span className="LehengaImages-description__p5">
                  Select size
                </span>{" "}
                <br />
                <span>
                  {" "}
                  <button className="LehengaImages-description__button">
                    S
                  </button>{" "}
                  <button className="LehengaImages-description__button">
                    M
                  </button>{" "}
                  <button className="LehengaImages-description__button">
                    L
                  </button>{" "}
                  <button className="LehengaImages-description__button">
                    XL
                  </button>
                </span>
                <br /> <br />
                <span className="LehengaImages-description__p6">
                  Quantity
                </span>{" "}
                <br />
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
                <br /> <br />
                <span>
                  {" "}
                  <button
                    onClick={handleShow}
                    className="LehengaImages-description__buttonadd"
                  >
                    {" "}
                    Add to Bag
                  </button>{" "}
                  <button className="LehengaImages-description__buttonbuy">
                    {" "}
                    <img src={whatsapp} alt="Icon of Whatsapp" /> Buy Now
                  </button>
                  <>
                    <Offcanvas
                      show={show}
                      placement="end"
                      onHide={handleClose}
                      id="OrderSummary"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                          {" "}
                          <span className="OrderSummary__header">
                            Order Summary
                          </span>{" "}
                          <span className="OrderSummary__header1">
                            {" "}
                            (2) items
                          </span>{" "}
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <OrderSummary />
                      </Offcanvas.Body>
                    </Offcanvas>
                  </>
                </span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <button
                className={`LehengaImages-Row2__button ${
                  descType === "description" ? "activeButton" : ""
                }`}
                onClick={() => setDescType("description")}
              >
                Description
              </button>
              <button
                className={`LehengaImages-Row2__button ${
                  descType === "information" ? "activeButton" : ""
                }`}
                onClick={() => setDescType("information")}
              >
                INFORMATION
              </button>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {descType === "description" && <LehengaDescription />}
              {descType === "information" && <InformationLehenga />}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductImages;
