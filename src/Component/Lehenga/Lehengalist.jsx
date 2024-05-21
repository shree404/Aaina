import img1 from "../../Assets/Women/img1.png";
import bs1 from "../../Assets/Women/img2.png";
import bs2 from "../../Assets/Women/img3.png";
import img2 from "../../Assets/LandingPage/newproduct1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";




function WomenLehengaList({products, selectedColor }){
    let imageArray = [
        {
          Image: img1,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
          color:"green",
        },
        {
          Image: img2,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
          color:"purple",
        },
        {
          Image: bs1,
          Name: "Lehenga Blouse Set ",
          price: "Rs.6000",
          color:"red",
        },
        {
            Image: img2,
            Name: "Lehenga Blouse Set ",
            price: "Rs.6000",
            color:"purple",
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
              <Col md={4} >
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