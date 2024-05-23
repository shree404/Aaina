import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrow from "../../Assets/Women/Vector.svg";
import { Link } from "react-router-dom";
import filter from "../../Assets/Women/filter_alt.svg";
import downarrow from "../../Assets/Women/ChevronDownOutline.svg";
import { useState } from "react";
import SelectCategoryWomen from "./SelectCategory";
import WomenFilter from "./Filter";
import WomenProductList from "./ProductWomen";
import WomenCategoryColor from "./CategoryColor";

function Womenbreadcrum() {
  const [category, setCategory] = useState();

  const CategorySelect = () => {
    setCategory(!category);
  };

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
      <div className="WomenBreadcrum">
        <div className="WomenBreadcrum__normal">
          <p className="WomenBreadcrum-p">
            <span>
              <Link to="/" className="WomenBreadcrum-p__t1">
                {" "}
                Home{" "}
              </Link>
            </span>{" "}
            <img src={arrow} alt="Arrow" />
            <span>
              {" "}
              <Link to="/women" className="WomenBreadcrum-p__t2">
                Women{" "}
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Container className="mb-5">
        <div className="WomenFilter">
          <p>
            <span className="WomenFilter__1">Filters</span>{" "}
            <img src={filter} alt="" />
          </p>
          <div className="WomenFilters">
            <button className="WomenFilter-select" onClick={CategorySelect}>
              {" "}
              <span className="WomenFilter-select-Container__prefix">
                {" "}
                Sort By : Best Match{" "}
              </span>{" "}
              &nbsp; &nbsp;
              <img src={downarrow} alt="" />{" "}
            </button>
            {category && <SelectCategoryWomen />}
          </div>
        </div>
        <Row>
          <Col md={4} >
            <WomenFilter />
            <WomenCategoryColor onFilterChange={handleFilterChange} />
          </Col>
          <Col md={8} >
            <WomenProductList selectedColor={selectedColor} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Womenbreadcrum;
