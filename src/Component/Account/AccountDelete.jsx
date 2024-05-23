import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function AccountDelete({Close}) {
  return (
    <div className="AccountDelete">
      <Container className="mt-3">
        <button  onClick={Close} className="AccountDelete-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="2rem"
            width="2rem"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
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
