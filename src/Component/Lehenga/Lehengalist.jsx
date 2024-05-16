import img1 from "../../Assets/Women/img1.png";
import bs1 from "../../Assets/Women/img2.png";
import bs2 from "../../Assets/Women/img3.png";
import img2 from "../../Assets/LandingPage/newproduct1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";




function WomenLehengaList(){
    let imageArray = [
        {
          Image: img1,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
          color:""
        },
        {
          Image: img2,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
        },
        {
          Image: bs1,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
        },
        {
            Image: img2,
            Name: "Lehenga Blouse Set ",
            price: "Rs.6000",
          },
      ];

      const filteredProducts = selectedColor
      ? imageArray.filter((products) => products.color === selectedColor)
      : imageArray;
    return(
        <>
  <Container>
        <div className="WomenFilterRed">
          <Row>
            {imageArray.map((product, index) => (
              <Col >
                <div key={index}>
                  <article className="WomenFilterRed-container">
                    <Link className="WomenFilterRed-container" to ='/product-lehenga'>
                    <img src={product.Image} alt="Image of Maroon Lehenga" />
                    <p className="WomenFilterRed__name">{product.Name} </p>
                    <p className="WomenFilterRed__price"> {product.price} </p>
                    </Link>
                  </article>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="WomenFilterRed-md">
          <Row>
            {imageArray.map((product, index) => (
              <Col md={6} xs={12} sm={12}>
                <div key={index}>
                  <article className="WomenFilterRed-container">
                    <Link className="WomenFilterRed-container" to ='/product-lehenga'>
                    <img src={product.Image} alt="Image of Maroon Lehenga" />
                    <p className="WomenFilterRed__name">{product.Name} </p>
                    <p className="WomenFilterRed__price"> {product.price} </p>
                    </Link>
                  </article>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
        </>
    )
}

export default WomenLehengaList;