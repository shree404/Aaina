import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function CategoryMob() {
  return (
    <>
      <Container className="mb-5">
        <h2 className="FAQs__head">Categories</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Women</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item> <Link to="/women-kurta" className='More-link-cat'>Kurti </Link></ListGroup.Item>
                <ListGroup.Item>Clothing</ListGroup.Item>
                <ListGroup.Item>Saree</ListGroup.Item>
                <ListGroup.Item>Wedding Dresses</ListGroup.Item>
                <ListGroup.Item><Link to="/women-lehenga" className='More-link-cat'>Lehenga</Link></ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Men</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>Clothing</ListGroup.Item>
                <ListGroup.Item>Shoes</ListGroup.Item>
                <ListGroup.Item>Accessories</ListGroup.Item>
                <ListGroup.Item>Wedding Dresses</ListGroup.Item>
                <ListGroup.Item>Groom set</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bridals</Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                <ListGroup.Item>Bridal Lehengas</ListGroup.Item>
                <ListGroup.Item>Bridal Saris</ListGroup.Item>
                <ListGroup.Item>Bridal Accessories</ListGroup.Item>
                <ListGroup.Item>Bridal Jewellery</ListGroup.Item>
                <ListGroup.Item>Bridal Gown</ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default CategoryMob;
