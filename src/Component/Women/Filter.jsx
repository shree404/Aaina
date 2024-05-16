import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

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
          <Link to="/women-kurta" className="CategoriesWomen__button2">
          <button className="CategoriesWomen__button2"> &nbsp;Kurti</button> 
          </Link>
          <button className="CategoriesWomen__button2">
            {" "}
            &nbsp;Wedding Dresses
          </button>
          <Link to="/women-lehenga" className="CategoriesWomen__button2">
          <button className="CategoriesWomen__button2"> &nbsp;Lehenga</button>
          </Link>
        </div>
      </div>
      </Container>
    </>
  );
}

export default WomenFilter;
