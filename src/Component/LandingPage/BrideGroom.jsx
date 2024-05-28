import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg1 from "../../Assets/LandingPage/bd1.png";
import bg2 from "../../Assets/LandingPage/bd2.png";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import products from "../../products.json";

function BrideGroom() {
  const filtered = products.filter(product => product.type==="groom" ||product.type=== "bride")
  return (
    <>
      <div className="NewProduct">
        <Container>
          <div>
            <Row className="justify-content-md-sm-xs-center">
              <Col md={12} sm={12} xs={12}>
                <h1>Bride and Groom</h1>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md={4} sm={12} xs={12}>
                <div className="container-kurtiSection-buynow--kurti1">
                  <img src={bg2} alt="Image of Kurta" className="kurta1" />
                </div>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <p className="container-BrideandGroomSection-buynow-middleSection__description">
                  <span className="container-BrideandGroomSection-buynow-middleSection__description__word">
                    Handcrafted
                  </span>{" "}
                  Masterpieces <br /> for Your Special Day{" "}
                </p>
                <p className="container-BrideandGroomSection-buynow-middleSection__description2">
                  Explore Our Bridal & Groom <br /> Collection
                </p>
                <Link  to="/women">
                <button className="container-BrideandGroomSection-buynow-middleSection__button">
                  BUY NOW
                </button>
                </Link>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <div className="container-kurtiSection-buynow--kurti2">
                  <img
                    src={bg1}
                    alt="Image of girl wearing kurta"
                    className="kurta2"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="NewProduct-S-md">
            <Row>
              {filtered.map((product, index) => (
               <ProductCard product={product} key={index} md={3}/>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BrideGroom;
