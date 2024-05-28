import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {X} from 'react-bootstrap-icons';

function AccountDelete({Close}) {
  return (
    <div className="AccountDelete">
      <Container className="mt-3">
        <button  onClick={Close} className="AccountDelete-button">
          <X  className="AccountDelete-icon" />
        </button>
        <h1>Are you sure want to delete your account ?</h1>
        <p className="AccountDelete-p">
          if you delete this account you will not be able to recover any
          histories and information. Please enter your email to confirm delete.
        </p>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-4"
          id="userdetails"
        >
          <Form.Control
            type="email"
            id="userdetails"
            placeholder="name@example.com"
            required
            name="email"
          />
        </FloatingLabel>
     <button className="AccountDelete-delete__button">Delete My Account</button> <br /> <br />
      </Container>
    </div>
  );
}

export default AccountDelete;
