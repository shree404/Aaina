import arrow from "../../Assets/Women/Vector.svg";
import { Link } from "react-router-dom";
import CallUs from "./callus";
import ConnectWithUs from "./Connectus";
import ContactUs from "./ContactUs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactUsBreadcrum() {
  return (
    <>
      <div className="FAQ">
        <div className="WomenBreadcrum__normal">
          <p className="WomenBreadcrum-p">
            <span>
              <Link to="/" className="WomenBreadcrum-p__t1">
                {" "}
                Home{" "}
              </Link>
            </span>{" "}
            <img src={arrow} alt="Arrow" />
            <span>
              {" "}
              <Link to="/contactus" className="WomenBreadcrum-p__t2">
                Contact Us{" "}
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={3} sm={12} xs={12}>
            <CallUs />
            <ConnectWithUs />
          </Col>{" "}
          <Col md={6} sm={12} xs={12}>
            <ContactUs />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ContactUsBreadcrum;
