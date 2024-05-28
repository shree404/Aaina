import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import AccountDelete from "./AccountDelete";
import Offcanvas from "react-bootstrap/Offcanvas";
import EditAccount from "./EditAccount";
import { Person, List,BoxArrowRight 
 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
 

function MyAccount() {
  let name = "Shreesha Aatreya";
  let country = "Nepal";
  let phone = "";
  let email = "shreeshaaatreya1@gmail.com";
  let address = " ";

  const [show, setShow] = useState();

  const HandleDeleteOption = () => {
    setShow(prevState => !prevState);
  };

  const [showedit, setShowedit] = useState(false);

  const handleEditClose = () => setShowedit(false);
  const handleEditShow = () => setShowedit(true);

  return (
    <>
      <div className="MyAccount">
        <Container>
          <Row>
            <Col md={3} sm={12} xs={12}>
              <div className="MyAccount-menu">
                <button className="account">
                  <Person/>
                  &nbsp; Account Details
                </button>
                <Link  className="account" to="/order">
                <button className="account">
                  <List />
                  &nbsp; My Orders
                </button>
                </Link>
                <button className="account">
                  <BoxArrowRight/>
                  &nbsp; Log Out
                </button>
              </div>
            </Col>
            <Col md={5} sm={12} xs={12}>
              <h1 className="MyAccount__head">My Details</h1>
              <button
                className="MyAccount__editbutton"
                onClick={handleEditShow}
              >
                edit
              </button>
              <Offcanvas
                id="custom-offcanvas"
                show={showedit}
                onHide={handleEditClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title> Edit Account </Offcanvas.Title>
                  
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <EditAccount />
                </Offcanvas.Body>
              </Offcanvas>
              <ListGroup>
                <ListGroup.Item>
                  {" "}
                  <b>Name :</b> {name}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Country :</b> {country}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Phone :</b> {phone}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Email :</b> {email}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Address :</b> {address}{" "}
                </ListGroup.Item>{" "}
                <br /> <br />
              </ListGroup>

              <h1 className="MyAccount__head">Delete Account</h1>
              {
                show ? (
                <AccountDelete Close={HandleDeleteOption}/>
                ) : (
                  <ListGroup>
                  <ListGroup.Item id="DeleteAccount">
                    {" "}
                    <button
                      className="MyAccount__deletebutton"
                      onClick={HandleDeleteOption}
                    >
                      Delete My Account
                    </button>{" "}
                  </ListGroup.Item>{" "}
                </ListGroup>
                )
              }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MyAccount;
