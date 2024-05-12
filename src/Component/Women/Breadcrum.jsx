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

function Womenbreadcrum() {
  const [category, setCategory] = useState();

  const CategorySelect = () => {
    setCategory(!category);
  };
  return (
    <>
      <div className="WomenBreadcrum">
        <Container>
          <Row>
            <Col md={2} sm={8} xs={8}>
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
            </Col>
          </Row>
        </Container>
      </div>
      <div className="WomenFilter">
        <Container>
          <Row>
            <Col >
              <p>
                <span className="WomenFilter__1">Filters</span>{" "}
                <img src={filter} alt="" />
              </p>
            </Col>
            <Col >
              <div className="WomenFilters">
                <button className="WomenFilter-b">
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
                </button>
              </div>
            </Col>
          </Row>
          <div>
            <Row>
                <Col>
                <WomenFilter/>
                </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Womenbreadcrum;
