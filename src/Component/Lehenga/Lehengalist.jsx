
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductCard from "../ProductCard";
import products from '../../products.json';




function WomenLehengaList( { selectedColors }){
const lehenga =products.filter((product) => {
  return product.type === "lehenga" && (selectedColors.length === 0 || selectedColors.includes(product.color));
});
    return(
        <>
  <Container>
        <div className="WomenFilterRed">
          <Row>
            {lehenga.map((product, index) => (
              <ProductCard product={product} key={index} md={6} lg={6} xl={4} />
            ))}
          </Row>
          </div>
      </Container>
        </>
    )
}

export default WomenLehengaList;