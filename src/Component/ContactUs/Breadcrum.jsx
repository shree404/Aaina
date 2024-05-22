import arrow from "../../Assets/Women/Vector.svg";
import { Link } from "react-router-dom";
import { Container,Row, Col } from "react-bootstrap";
import CallUs from "./callus";
import ConnectWithUs from "./Connectus";

function ContactUsBreadcrum(){
    return(
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
            <img src={arrow} alt="Arrow" />
            <span>
              {" "}
              <Link to="/contactus" className="WomenBreadcrum-p__t2">
                Contact Us{" "}
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Container>
        <CallUs/>
        <ConnectWithUs/>
      </Container>
        </>
    )
}

export default ContactUsBreadcrum;