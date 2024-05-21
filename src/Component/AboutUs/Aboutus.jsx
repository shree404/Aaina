import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../Assets/Aboutus/aboutus.png";

function AboutUs() {
  return (
    <>
      <Container>
        <div className="AboutUs">
          <Row>
            <Col md={5} sm={12} xs={12}>
              <h1 className="AboutUs__head">About Us</h1>
              <p className="AboutUs__des">
                Aina Is Your Go-To Boutique For Lehengas, Sarees, Bridal And
                Groom Dresses, Offering A Seamless Blend Of Tradition And
                Contemporary Flair. From The Latest Designs Perfect For Parties
                To Attire Tailored For Ceremonies And Festivals, Aina Curates A
                Diverse Collection, Capturing The Essence Of Nepali Culture In
                Every Thread. Elevate Every Occasion With Aina, Where Style
                Meets Perfection.
              </p>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <img src={img} className="AboutUs__img" alt="About Us" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default AboutUs;
