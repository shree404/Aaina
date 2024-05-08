import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../Assets/ProductLehenga/1.png";
import img2 from "../../Assets/ProductLehenga/2.png";
import info from "../../Assets/ProductLehenga/info.svg";
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import add from "../../Assets/ProductLehenga/add.svg";
import remove from "../../Assets/ProductLehenga/remove.svg";
import whatsapp from "../../Assets/ProductLehenga/whatsapp.svg";
import up from "../../Assets/ProductLehenga/4.svg";
import down from "../../Assets/ProductLehenga/3.svg";


function ProductImages() {
    const [quantity, setQuantity] = useState(1);

    const decreaseValue = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseValue = () => {
      setQuantity(quantity + 1);
    };
  return (
    <>
      <div className="LehengaImages">
        <Container>
          <Row>
            <Col md={2}>
              <div className="LehengaImages-col1">
                <div>
                    <img src={up} alt="Up arrow" />
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
                    <img src={down} alt="Down Arrow" />
                </div>
              </div>
            </Col>
            <Col md={5}>
              <img src={img2} alt="Image of Lehenga" />
            </Col>
            <Col md={5}>
              <p className="LehengaImages-description">
                <span className=" LehengaImages-description__p1">Purple Embroidered Lehenga Choli</span> <br /> <br />
                <span className="LehengaImages-description__p2">Rs. 6000</span> <br />
                <span  className="LehengaImages-description__p3">
                  Incl. of all tax
                  <img src={info} alt="Icon" />
                </span> <br /> <br />
                <span className="LehengaImages-description__p4">In Stock</span> <br /><br />
                <span className="LehengaImages-description__p5">Select size</span> <br />
                <span>
                  {" "}
                  <button className="LehengaImages-description__button">S</button> <button className="LehengaImages-description__button">M</button> <button className="LehengaImages-description__button">L</button>{" "}
                  <button className="LehengaImages-description__button">XL</button>
                </span>
                <br /> <br />
                <span className="LehengaImages-description__p6">Quantity</span> <br />
                <span>
                  {" "}
                  <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" id="LehengaImages-description__button2"  onClick={decreaseValue}><img src={remove} alt="Remove icon" /></Button>
      <Button variant="secondary" id="LehengaImages-description__button2">{quantity}</Button>
      <Button variant="secondary" id="LehengaImages-description__button2" onClick={increaseValue}><img src={add} alt="Add icon" /></Button>
    </ButtonGroup>
                </span> <br /> <br />
                <span>
                  {" "}
                  <button className="LehengaImages-description__buttonadd"> Add to Bag</button> <button className="LehengaImages-description__buttonbuy"> <img src={whatsapp}alt="Icon of Whatsapp" /> Buy Now</button>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductImages;