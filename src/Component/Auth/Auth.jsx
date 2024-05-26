import Login from "./Login";
import { useState } from "react";
import Register from "./Register";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Auth() {
  const [authtype, setAuthtype] = useState("login");
  return (
    <>
      <div className="Auth">
        <Row className="justify-content-md-center">
          <Col md={2}>
            <button
              onClick={() => setAuthtype("login")}
              className={`Auth-button ${
                authtype === "login" ? "auth-button" : ""
              }`}
            >
              Login
            </button>{" "}
          </Col>
          <Col md={2}>
            <button
              onClick={() => setAuthtype("register")}
              className={`Auth-button ${
                authtype === "register" ? "auth-button" : ""
              }`}
            >
              Register
            </button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6} sm={12} xs={12}>
            {authtype === "login" && <Login Signup={() => setAuthtype("register")}
              className={`Auth-button ${
                authtype === "register" ? "auth-button" : ""
              }`} />}
            {authtype === "register" && <Register />}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Auth;
