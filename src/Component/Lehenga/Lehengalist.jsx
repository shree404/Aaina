
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductCard from "../ProductCard";
import products from '../../products.json';




function WomenLehengaList( { selectedColors , sortBy }){
const lehenga =products.filter((product) => {
  return product.type === "lehenga" && (selectedColors.length === 0 || selectedColors.includes(product.color));
});

let sortedLehenga = [...lehenga];
  switch (sortBy) {
    case "Price High To Low":
      sortedLehenga.sort((a, b) => parseFloat(b.Price.slice(3)) - parseFloat(a.Price.slice(3)));
      break;
    case "Price Low To High":
      sortedLehenga.sort((a, b) => parseFloat(a.Price.slice(3)) - parseFloat(b.Price.slice(3)));
      break;
    case "Latest Arrival":
      sortedLehenga.sort(
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
            {sortedLehenga.map((product, index) => (
              <ProductCard product={product} key={index} md={6} lg={6} xl={4} />
            ))}
          </Row>
          </div>
      </Container>
        </>
    )
}

export default WomenLehengaList;