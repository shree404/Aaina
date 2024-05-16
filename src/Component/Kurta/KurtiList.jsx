
import kurtha4 from "../../Assets/LandingPage/kurta4.png";
import kurtha2 from "../../Assets/LandingPage/kurta2.png";
import kurtha3 from "../../Assets/LandingPage/kurta3.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


function KurtiList({ products, selectedColor }){
    let imageArray = [
        {
          Image: kurtha4,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
          color:"pink",
        },
        {
          Image: kurtha2,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
          color:"green",
        },
        {
          Image: kurtha3,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
          color:"yellow",
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
            {filteredProducts.map((product, index) => (
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
                    <Link  className="WomenFilterRed-container" to ="/product-lehenga">
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

export default KurtiList;