import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import OrderSummary from "../../Pages/orderSummary";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import MoreSection from "./MoreSection.jsx";
import CategoryMob from "./CategoryMob.jsx";
import { HouseDoor , Grid, Cart, Gear } from "react-bootstrap-icons";

function FooterMob() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showmore, setShowmore] = useState(false);

  const handleMoreClose = () => setShowmore(false);
  const handleMoreShow = () => setShowmore(true);

  const [showcategory, setShowcategory] = useState(false);

  const handleCategoryClose = () => setShowcategory(false);
  const handleCategoryShow = () => setShowcategory(true);

  return (
    <>
      <div className="FooterMob">
        <Container>
          <Row className="justify-content-md-sm-xs-center">
            <Col sm={3} xs={3} md={3}>
              <button className="FooterMob-Button">
                <Link className="FooterMob-Button" to="/">
               <HouseDoor  id="CategoryIcon" />
                  <br />
                  Home
                </Link>
              </button>
            </Col>
            <Col sm={3} xs={3} md={3}>
              <button onClick={handleCategoryShow} className="FooterMob-Button">
               <Grid  id="CategoryIcon"/>
                <br />
                Category
              </button>
              <Offcanvas
                show={showcategory}
                placement="end"
                onHide={handleCategoryClose}
                id="OrderSummary"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <CategoryMob/>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
            <Col sm={3} xs={3} md={3}>
              <button onClick={handleShow} className="FooterMob-Button">
              <Cart  id="CategoryIcon"/>
                <br />
                Cart
              </button>
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
                    <span className="OrderSummary__header1"> (2) items</span>{" "}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <OrderSummary />
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
            <Col sm={3} xs={3} md={3}>
              <button onClick={handleMoreShow} className="FooterMob-Button">
               <Gear  id="CategoryIcon"/>
                <br />
                More
              </button>
              <Offcanvas
                show={showmore}
                placement="end"
                onHide={handleMoreClose}
                id="OrderSummary"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <MoreSection />
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FooterMob;
