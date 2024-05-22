import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import AccountDelete from "./AccountDelete";
import Offcanvas from "react-bootstrap/Offcanvas";
import EditAccount from "./EditAccount";

function MyAccount() {
  let name = "Shreesha Aatreya";
  let country = "Nepal";
  let phone = "";
  let email = "shreeshaaatreya1@gmail.com";
  let address = " ";

  const [show, setShow] = useState();

  const HandleDeleteOption = () => {
    setShow(!show);
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
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.5rem"
                    height="1.5rem"
                    id="MyAccount__icon"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm6-4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>{" "}
                  &nbsp; Account Details
                </button>
                <button className="account">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.5rem"
                    height="1.5rem"
                    id="MyAccount__icon"
                  >
                    <path d="M4 8h16v2H4zm0 5h16v-2H4zm0-9v2h16V4H4z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>{" "}
                  &nbsp; My Orders
                </button>
                <button className="account">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1.5rem"
                    height="1.5rem"
                    id="MyAccount__icon"
                  >
                    <path d="M3 3h8v2H3zM3 9h8V7H3zM3 15h8v-2H3zM21 12l-4-4v3h-7v2h7v3z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>{" "}
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
                <br /> <br />
                {show && <AccountDelete Close={HandleDeleteOption} />}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MyAccount;
