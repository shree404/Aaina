
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import products from '../../products.json';
import ProductCard from "../ProductCard";



function KurtiList({selectedColors}){
  const kurti= products.filter((product) => {
    return product.type === "kurta" && (selectedColors.length === 0 || selectedColors.includes(product.color));
  });
    return(
        <>
        <Container>
        <div className="WomenFilterRed">
          <Row>
            {kurti.map((product, index) => (
            <ProductCard product={product} key={index} md={6} lg={6} xl={4} />
            ))}
          </Row>
        </div>
      </Container>
        </>
    )
}

export default KurtiList;