
import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";

function FAQBreadcrum() {
  return (
    <>
      <div className="FAQ">
        <div className="WomenBreadcrum__normal">
          <p className="WomenBreadcrum-p">
            <span>
              <Link to="/" className="WomenBreadcrum-p__t1">
                {" "}
                Home{" "}
              </Link>
            </span>{" "}
            <ChevronRight/>
            <span>
              {" "}
              <Link to="/faqs" className="WomenBreadcrum-p__t2">
                Faqs{" "}
              </Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default FAQBreadcrum;
