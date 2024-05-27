import img1 from "../../Assets/LandingPage/kurti1.png";
import img2 from "../../Assets/LandingPage/kutri2.png";
import kurtha1 from "../../Assets/LandingPage/kurta1.png";
import kurtha2 from "../../Assets/LandingPage/kurta2.png";
import kurtha3 from "../../Assets/LandingPage/kurta3.png";
import kurtha4 from "../../Assets/LandingPage/kurta4.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Kurti() {
  let kurtiarray = [
    {
      kurtiImage: kurtha1,
      kurtiName: "Bride Saree",
      kurtiprice: "Rs.28000",
    },
    {
      kurtiImage: kurtha2,
      kurtiName: "Bride Saree",
      kurtiprice: "Rs.28000",
    },
    {
      kurtiImage: kurtha3,
      kurtiName: "Bride Saree",
      kurtiprice: "Rs.28000",
    },
    {
      kurtiImage: kurtha4,
      kurtiName: "Bride Saree",
      kurtiprice: "Rs.28000",
    },
  ];
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
              {kurtiarray.map((product, index) => (
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
                          src={product.kurtiImage}
                          alt="Image of Maroon Lehenga"
                        />
                        <p className="product-details-container-single-product__name">
                          {product.kurtiName}{" "}
                        </p>
                        <p className="product-details-container-single-product__price">
                          {" "}
                          {product.kurtiprice}{" "}
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

export default Kurti;
