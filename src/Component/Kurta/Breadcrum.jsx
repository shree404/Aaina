import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronRight, Funnel } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import KurtiList from "./KurtiList";
import { useState } from "react";
import WomenCategoryColor from "../Women/CategoryColor";
import Form from "react-bootstrap/Form";

function WomenKurtaBreadcrum() {

  const [selectedColor, setSelectedColor] = useState(null);
  const handleFilterChange = (selectedColors) => {
    if (selectedColors.length > 0) {
      setSelectedColor(selectedColors[0]);
    } else {
      setSelectedColor(null);
    }
  };

  return (
    <>
        <div className="WomenBreadcrum__normal">
          <p className="WomenBreadcrum-p">
            <span>
              <Link to="/" className="WomenBreadcrum-p__t1">
                {" "}
                Home{" "}
              </Link>
            </span>{" "}
            <ChevronRight />
            <span>
              {" "}
              <Link to="/women" className="WomenBreadcrum-p__t2">
                Women{" "}
              </Link>
            </span>
            <ChevronRight />
            <span>
              {" "}
              <Link to="/women-kurta" className="WomenBreadcrum-p__t2">
                Kurti{" "}
              </Link>
            </span>
          </p>
        </div>
      <Container>
        <div className="WomenFilter">
          <p>
            <span className="WomenFilter__1">Filters</span> <Funnel />
          </p>
          <div className="WomenFilters">
            <Form.Select aria-label="Default select example">
              <option className="Option__button">Best Match</option>
              <option value="1" className="Option__button">
                Price High to Low
              </option>
              <option value="2" className="Option__button">
                Price Low to High
              </option>
              <option value="3" className="Option__button">
                Latest Arrival
              </option>
            </Form.Select>
          </div>
        </div>
        <Row>
          <Col md={4}>
            <WomenCategoryColor onFilterChange={handleFilterChange} />
          </Col>
          <Col md={8}>
            <KurtiList selectedColor={selectedColor} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WomenKurtaBreadcrum;
