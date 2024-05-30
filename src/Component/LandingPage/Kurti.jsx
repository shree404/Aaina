import img1 from "../../Assets/LandingPage/kurti1.png";
import img2 from "../../Assets/LandingPage/kutri2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import  products from '../../products.json';
import ProductCard from "../ProductCard";

function Kurti() {
  const kurti =products.filter (product => product.type === "kurta")
  return (
    <>
      <div className="NewProduct">
        <Container>
          <div>
            <Row className="justify-content-md-sm-xs-center">
              <Col md={12} sm={12} xs={12}>
                <h1>kurti</h1>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md={4} sm={12} xs={12}>
                <div className="container-kurtiSection-buynow--kurti1">
                  <img src={img2} alt="Image of Kurta" className="kurta1" />
                </div>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <p className="container-kurtiSection-buynow-middleSection__description">
                  Explore Our{" "}
                  <span className="container-kurtiSection-buynow-middleSection__description__kurti-word">
                    {" "}
                    Kurti <br />{" "}
                  </span>{" "}
                  Collection
                </p>
                <p className="container-kurtiSection-buynow-middleSection__description2">
                  Explore Our Bridal & Groom <br /> Collection
                </p>
                <Link to="/women">
                <button className="container-kurtiSection-buynow-middleSection__button">
                  BUY NOW
                </button>
                </Link>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <div className="container-kurtiSection-buynow--kurti2">
                  <img
                    src={img1}
                    alt="Image of girl wearing kurta"
                    className="kurta2"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="NewProduct-S-md">
            <Row>
              {kurti.map((product, index) => (
                <ProductCard product={product} key={index} md={6} lg={3}/>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Kurti;
