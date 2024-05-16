import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import arrow from "../../Assets/Women/Vector.svg";
import filter from "../../Assets/Women/filter_alt.svg";
import downarrow from "../../Assets/Women/ChevronDownOutline.svg";
import { useState } from "react";
import SelectCategoryWomen from "../Women/SelectCategory";
import WomenLehengaList from "./Lehengalist";
import WomenCategoryColor from "../Women/CategoryColor";


function WomenLehengaBreadcrum(){
    const [category, setCategory] = useState();

    const CategorySelect = () => {
      setCategory(!category);
    };
    return(
        <>
        <div>
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
                    <img src={arrow} alt="Arrow" />
                    <span>
                      {" "}
                      <Link to="/women-lehenga" className="WomenBreadcrum-p__t2">
                        Lehenga{" "}
                      </Link>
                    </span>
                  </p>
            </div>
            <div className="WomenFilter">
          <Container fluid>
            <Row>
              <Col>
                <p>
                  <span className="WomenFilter__1">Filters</span>{" "}
                  <img src={filter} alt="" />
                </p>
              </Col>
              <Col>
                <div className="WomenFilters">
                  <button
                    className="WomenFilter-select"
                    onClick={CategorySelect}
                  >
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
              </Col>
            </Row>
            <div className="WomenBreadcrum-lastrow">
              <Row>
                <Col md={4}>
                  <WomenCategoryColor />
                </Col>
                <Col md={8}>
                  <WomenLehengaList />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        </div>
        </>
    )
}

export default WomenLehengaBreadcrum;