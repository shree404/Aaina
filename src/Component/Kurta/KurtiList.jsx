
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import products from '../../products.json';
import ProductCard from "../ProductCard";



function KurtiList({selectedColors,sortBy}){
  const kurti= products.filter((product) => {
    return product.type === "kurta" && (selectedColors.length === 0 || selectedColors.includes(product.color));
  });

  let sortedKurti = [...kurti];
  switch (sortBy) {
    case "Price High To Low":
      sortedKurti.sort((a, b) => parseFloat(b.Price.slice(3)) - parseFloat(a.Price.slice(3)));
      break;
    case "Price Low To High":
      sortedKurti.sort((a, b) => parseFloat(a.Price.slice(3)) - parseFloat(b.Price.slice(3)));
      break;
    case "Latest Arrival":
      sortedKurti.sort(
        (a, b) => new Date(b.arrival_date) - new Date(a.arrival_date)
      );
      break;
    default:
      break;
  }
    return(
        <>
        <Container>
        <div className="WomenFilterRed">
          <Row>
            {sortedKurti.map((product, index) => (
            <ProductCard product={product} key={index} md={6} lg={6} xl={4} />
            ))}
          </Row>
        </div>
      </Container>
        </>
    )
}

export default KurtiList;