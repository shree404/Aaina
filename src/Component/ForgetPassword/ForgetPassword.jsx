import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ForgetPassword() {
  return (
    <div className="ForgetPassword">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="ForgetPassword-head">Forgot Password?</h2>
            <p className="ForgetPassword-p">
              Enter your email. You will receive a link to reset your password.
            </p>
            <FloatingLabel
              className="mb-3"
              controlId="floatingtext"
              label="Email"
              id="userdetails"
            >
              <Form.Control
                type="email"
                id="userdetails"
                name="email"
                required
                placeholder="Email"
              />
            </FloatingLabel>
            <button className="ForgetPassword-submit">Submit</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgetPassword;
