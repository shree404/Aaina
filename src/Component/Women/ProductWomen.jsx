import img1 from "../../Assets/Women/img1.png";
import bs1 from "../../Assets/Women/img2.png";
import bs2 from "../../Assets/Women/img3.png";
import img2 from "../../Assets/LandingPage/newproduct1.png";
import img3 from "../../Assets/LandingPage/newproduct3.png";
import kurtha2 from "../../Assets/LandingPage/kurta2.png";
import kurtha3 from "../../Assets/LandingPage/kurta3.png";
import kurtha4 from "../../Assets/LandingPage/kurta4.png";
import imgr2 from "../../Assets/LandingPage/bdimg2.png";
import imgr3 from "../../Assets/LandingPage/bdimg3.png";
import imgr4 from "../../Assets/LandingPage/bdimg4.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function WomenProductList({ products, selectedColor }) {
 
  let imageArray =
   [
    {
      Image: img1,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"green",
      type:"lehenga",
    },
    {
      Image: img2,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"purple",
      type:"lehenga",
    },
    {
      Image: img3,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"green",
      type:"kurti",
    },
    {
      Image: kurtha2,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"green",
      type:"kurti",
    },
    {
      Image: kurtha3,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"yellow",
      type:"kurti",
    },
    {
      Image: kurtha4,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"pink",
      type:"kurti",
    },
    {
      Image: bs1,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"red",
      type:"lehenga",
    },
    {
      Image: bs2,
      Name: "Lehenga Blouse Set ",
      price: "Rs.6000",
      color:"red",
      type:"lehenga",
    },
    {
        Image: img2,
        Name: "Lehenga Blouse Set ",
        price: "Rs.6000",
        color:"purple",
        type:"lehenga",
      },
    {
      Image: imgr3,
      Name: "Bride Saree",
      price: "Rs.28000",
      color:"red",
      type:"groom",
    },
    {
      Image: imgr4,
      Name: "Groom wedding set",
      price: "Rs.28000",
      color:"red",
      type:"saree",
    },
    {
      Image: imgr2,
      Name: "Bride Saree",
      price: "Rs.28000",
      color:"red",
      type:"saree",
    },
  ];

  const filteredProducts = selectedColor
    ? imageArray.filter((products) => products.color === selectedColor)
    : imageArray;



  return (
    <>
    
      <Container>
        <div className="WomenFilterRed">
          <Row>
            { filteredProducts.map((product, index) => (
              <Col>
                <div key={index}>
                  <article >
                    <Link className="WomenFilterRed-container" to ="/product-lehenga">
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
  );
}

export default WomenProductList;
