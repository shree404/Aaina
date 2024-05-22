import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg1 from "../../Assets/LandingPage/bd1.png";
import bg2 from "../../Assets/LandingPage/bd2.png";
import img1 from "../../Assets/LandingPage/bdimg1.png";
import img2 from "../../Assets/LandingPage/bdimg2.png";
import img3 from "../../Assets/LandingPage/bdimg3.png";
import img4 from "../../Assets/LandingPage/bdimg4.png";
import { Link } from "react-router-dom";

function BrideGroom() {
  let imageArray = [
    {
      Image: img1,
      Name: "Bride Saree",
      price: "Rs.28000",
    },
    {
      Image: img2,
      Name: "Groom wedding set",
      price: "Rs.28000",
    },
    {
      Image: img3,
      Name: "Bride Saree",
      price: "Rs.28000",
    },
    {
      Image: img4,
      Name: "Bride Saree",
      price: "Rs.28000",
    },
  ];
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
                <button className="container-BrideandGroomSection-buynow-middleSection__button">
                  BUY NOW
                </button>
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
          <div className="NewProduct-md">
            <Row className="justify-content-md-sm-xs-center">
              {imageArray.map((product, index) => (
                <Col md={3} sm={6} xs={12}>
                  <div
                    key={index}
                    className="product-details-container-single-product"
                  >
                    <article>
                      <Link
                        to="/product-lehenga"
                        className="product-details-container-single-product"
                      >
                        <img
                          src={product.Image}
                          alt="Image of Maroon Lehenga"
                        />
                        <p className="product-details-container-single-product__name">
                          {product.Name}{" "}
                        </p>
                        <p className="product-details-container-single-product__price">
                          {" "}
                          {product.price}{" "}
                        </p>
                      </Link>
                    </article>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="NewProduct-S-md">
            <Row>
              {imageArray.map((product, index) => (
                <Col>
                  <div
                    key={index}
                    className="product-details-container-single-product"
                  >
                    <article>
                      <Link
                        to="/product-lehenga"
                        className="product-details-container-single-product"
                      >
                        <img
                          src={product.Image}
                          alt="Image of Maroon Lehenga"
                        />
                        <p className="product-details-container-single-product__name">
                          {product.Name}{" "}
                        </p>
                        <p className="product-details-container-single-product__price">
                          {" "}
                          {product.price}{" "}
                        </p>
                      </Link>
                    </article>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BrideGroom;
