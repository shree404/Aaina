import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SelectCategoryWomen() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="Option">
              <button className="Option__button">Best Match</button> 
              <button className="Option__button">price high to low</button>{" "}
              <button className="Option__button">price low to high</button>{" "}
              <button className="Option__button">latest arrival</button> <br />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SelectCategoryWomen;
