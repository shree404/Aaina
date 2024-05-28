
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import products from '../../products.json';
import ProductCard from "../ProductCard";



function KurtiList(){
  const kurti= products.filter(product => product.type === "kurta")
    return(
        <>
        <Container>
        <div className="WomenFilterRed">
          <Row>
            {kurti.map((product, index) => (
            <ProductCard product={product} key={index} md={6} lg={4} />
            ))}
          </Row>
        </div>
      </Container>
        </>
    )
}

export default KurtiList;