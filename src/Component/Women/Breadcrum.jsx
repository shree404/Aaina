import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrow from "../../Assets/Women/Vector.svg";

function Womenbreadcrum() {
  return (
    <>
      <div className="WomenBreadcrum">
        <Container>
          <Row>
            <Col md={3} sm={8} xs={8}>
              <p className="WomenBreadcrum-p">
                <span className="WomenBreadcrum-p__t1">Home</span> <img src={arrow} alt="Arrow" />
                <span className="WomenBreadcrum-p__t2">Women</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Womenbreadcrum;
