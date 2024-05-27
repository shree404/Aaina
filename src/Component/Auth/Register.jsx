import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Eye , EyeSlash, Google , Apple } from "react-bootstrap-icons";

function Register({Login}) {
  const [showpassword, setShowpassword] = useState("false");

  const HandleShowPassword = () => {
    setShowpassword(!showpassword);
  };
  return (
    <>
      <div>
        <Form.Label htmlFor="inputname">Full Name</Form.Label>
        <Form.Control
          type="text"
          id="inputdetails"
          aria-describedby="passwordHelpBlock"
          placeholder="Enter your Name"
          className="mb-3"
          required
        />
        <Form.Label htmlFor="inputemail">Email</Form.Label>
        <Form.Control
          type="email"
          id="inputdetails"
          aria-describedby="passwordHelpBlock"
          placeholder="Enter your Email"
          className="mb-3"
          required
        />
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Form.Label htmlFor="inputpassword">Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type={showpassword ? "text" : "password"}
                id="inputdetails"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
                required
              />
              <InputGroup.Text onClick={HandleShowPassword} id="basic-addon1">
                {showpassword ? (
                 <Eye/>
                ) : (
                 <EyeSlash/>
                )}
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Form.Label htmlFor="inputpassword">Re-type Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                type={showpassword ? "text" : "password"}
                id="inputdetails"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
                required
              />
              <InputGroup.Text onClick={HandleShowPassword} id="basic-addon1">
                {showpassword ? (
                  <Eye/>
                ) : (
                <EyeSlash/>
                )}
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <button className="Login-button">Register</button>
        <hr />
        <p className="Login-or">OR</p>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <button className="Login-google">
              {" "}
            <Google/>
              Sign Up with With Google
            </button>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <button className="Login-apple">
              {" "}
             <Apple/>
              Sign Up With Apple
            </button>
          </Col>
        </Row>
        <p>Already have an account ?  <button className="Login__signupButton" onClick={Login}>Login Now</button></p>
      </div>
    </>
  );
}
export default Register;
