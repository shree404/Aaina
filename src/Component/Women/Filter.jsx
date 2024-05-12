import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import WomenFilterRed from "./FilterRed";
import WomenFilterYellow from "./FilteraYellow";

function WomenFilter() {
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [pink, setPink] = useState();
  const [yellow, setYellow] = useState();
  const [purple, setPurple] = useState(false);
  const [lightGray, setLightGray] = useState(false);

  const showComponent = (component) => {
if (component === 'WomenFilterRed'){
  setRed(true);
  setGreen(false);
  setPink(false);
  setYellow(false);
  setPurple(false);
  setLightGray(false);
}
else if(component === 'WomenFilterYellow'){
  setRed(false);
  setGreen(false);
  setPink(false);
  setYellow(true);
  setPurple(false);
  setLightGray(false);
}
  }

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <div className="CategoriesWomen">
                <button className="CategoriesWomen__button1">
                  {" "}
                  &nbsp; Categories <hr className="CategoriesWomen__line1" />
                </button>{" "}
                <button className="CategoriesWomen__button2">
                  {" "}
                  &nbsp;Clothing
                </button>
                <button className="CategoriesWomen__button2">
                  {" "}
                  &nbsp;saree
                </button>
                <button className="CategoriesWomen__button2">
                  {" "}
                  &nbsp;Kurti
                </button>
                <button className="CategoriesWomen__button2">
                  {" "}
                  &nbsp;Wedding Dresses
                </button>
                <button className="CategoriesWomen__button2">
                  {" "}
                  &nbsp;Lehenga
                </button>
              </div>
              <div className="ColorOptionWomen">
                <button className="CategoriesWomen__button1">
                  {" "}
                  &nbsp; Color Option
                  <hr className="CategoriesWomen__line1" />
                </button>
                <div>
                  <button className="ColorOptionWomen__color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect width="32" height="32" rx="16" fill="#94577E" />
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#EF88A2"
                      />
                    </svg>
                  </button>
                  <button className="ColorOptionWomen__color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect width="32" height="32" rx="16" fill="#DD130C" />
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#033538"
                      />
                    </svg>
                  </button>
                  <button onClick={showComponent} className="ColorOptionWomen__color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect width="32" height="32" rx="16" fill="#219653" />
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#D3B633"
                      />
                    </svg>
                  </button>
                  <button className="ColorOptionWomen__color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect width="32" height="32" rx="16" fill="#F3AF48" />
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#8478BC"
                      />
                    </svg>
                  </button>
                    <button onClick={showComponent} className="ColorOptionWomen__color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect width="32" height="32" rx="16" fill="#3D4853" />
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#C30024"
                      />
                    </svg>
                  </button>
                  <button className="ColorOptionWomen__color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <rect width="32" height="32" rx="16" fill="#D8DADD" />
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="#D8DADD"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Col>
            <Col>
            <div>
              {/* {setRed && <WomenFilterRed/>}
              {setYellow && <WomenFilterYellow/>} */}
              
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default WomenFilter;
