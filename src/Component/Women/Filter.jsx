import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WomenCategoryColor from "./CategoryColor";

function WomenFilter() {
  return (
    <><Container>
      <div>
        <div className="CategoriesWomen">
          <button className="CategoriesWomen__button1">
            {" "}
           Categories <hr className="CategoriesWomen__line1" />
          </button>{" "}
          <button className="CategoriesWomen__button2"> &nbsp;Clothing</button>
          <button className="CategoriesWomen__button2"> &nbsp;saree</button>
          <button className="CategoriesWomen__button2"> &nbsp;Kurti</button>
          <button className="CategoriesWomen__button2">
            {" "}
            &nbsp;Wedding Dresses
          </button>
          <button className="CategoriesWomen__button2"> &nbsp;Lehenga</button>
        </div>
      </div>
      </Container>
    </>
  );
}

export default WomenFilter;
