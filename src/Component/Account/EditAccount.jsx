import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import ChangePassword from "./ChangePassword";

function EditAccount() {
  const [show, setShow] = useState();

  const HandlePassword = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        <hr />
        <form action="">
          <FloatingLabel
            className="mb-2"
            controlId="floatingtext"
            label="Full Name"
            id="edituserdetails__name"
          >
            <Form.Control
              type="text"
              id="edituserdetails"
              name="username"
              required
              placeholder="Full Name"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingnumber"
            id="edituserdetails__phone"
            label="Phone no"
            className="mb-2"
          >
            <Form.Control
              type="tel"
              id="edituserdetails"
              placeholder="Phone no"
              required
              name="phoneno"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingtext"
            id="edituserdetails__address"
            label="Street and House number"
            className="mb-2"
          >
            <Form.Control
              type="tel"
              id="edituserdetails"
              placeholder="Address"
              required
              name="Address"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingtext"
            id="edituserdetails__address"
            label="Apartment/Suit"
            className="mb-2"
          >
            <Form.Control
              type="text"
              id="edituserdetails"
              placeholder="Address"
              required
              name="Address"
            />
          </FloatingLabel>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingtext"
                id="edituserdetails__postalcode"
                label="postal code"
                className="mb-2"
              >
                <Form.Control
                  type="text"
                  id="edituserdetails"
                  placeholder="Address"
                  required
                  name="Address"
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingtext"
                id="edituserdetails__postalcode"
                label="city"
                className="mb-2"
              >
                <Form.Control
                  type="text"
                  id="edituserdetails"
                  placeholder="Address"
                  required
                  name="Address"
                />
              </FloatingLabel>
            </Col>
          </Row>
        </form>
        <button className="EditAccount-changePassword" onClick={HandlePassword}>
          Change Password
        </button>

        {show && <ChangePassword />}
        <hr />
        <button className="EditAccount-update">Update</button>
        <button className="EditAccount-discard">Discard</button>
      </div>
    </>
  );
}

export default EditAccount;
