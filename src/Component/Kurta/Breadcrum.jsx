import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrow from "../../Assets/Women/Vector.svg";
import { Link } from "react-router-dom";
import filter from "../../Assets/Women/filter_alt.svg";
import downarrow from "../../Assets/Women/ChevronDownOutline.svg";
import SelectCategoryWomen from "../Women/SelectCategory";
import KurtiList from "./KurtiList";
import { useState } from "react";
import WomenCategoryColor from "../Women/CategoryColor";



function WomenKurtaBreadcrum(){
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

    return(
        <>
 <div>
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
                    <img src={arrow} alt="Arrow" />
                    <span>
                      {" "}
                      <Link to="/women-kurta" className="WomenBreadcrum-p__t2">
                        Kurti{" "}
                      </Link>
                    </span>
                  </p>
            </div>
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
                  <WomenCategoryColor onFilterChange={handleFilterChange} />
                </Col>
                <Col md={8}>
                  <KurtiList selectedColor={selectedColor} />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
        </>
    )
}

export default WomenKurtaBreadcrum;