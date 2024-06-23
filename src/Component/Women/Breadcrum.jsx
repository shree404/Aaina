import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { ChevronRight , Funnel} from "react-bootstrap-icons";
import FilterCategory from "./FilterCategory";
import WomenCategoryColor from "./CategoryColor";
import WomenProductList from "./ProductWomen";
import products from "../../products.json";
import WomenFilter from "./Filter";

function Womenbreadcrum() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState("Best Match");

  const handleFilterChange = (selectedColors) => {
    setSelectedColors(selectedColors);
  };

  const handleSortChange = (option) => {
    setSortBy(option);
  };

  return (
    <>
      <div className="WomenBreadcrum__normal">
        <p className="WomenBreadcrum-p">
          <span>
            <Link to="/" className="WomenBreadcrum-p__t1">
              Home
            </Link>
          </span>{" "}
          <ChevronRight />
          <span>
            {" "}
            <Link to="/women" className="WomenBreadcrum-p__t2">
              Women
            </Link>
          </span>
        </p>
      </div>
      <Container className="mb-5">
        <div className="WomenFilter">
          <p>
            <span className="WomenFilter__1">Filters</span>{" "}
            <Funnel/>
          </p>
          <div className="WomenFilters">
            <FilterCategory onSortChange={handleSortChange} />
          </div>
        </div>
        <Row>
          <Col md={4}>
          <WomenFilter />
            <WomenCategoryColor onFilterChange={handleFilterChange} />
          </Col>
          <Col md={8}>
            <WomenProductList
              selectedColors={selectedColors}
              sortBy={sortBy}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Womenbreadcrum;
