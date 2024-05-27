import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { Eye , EyeSlash, Google } from "react-bootstrap-icons";

function Login({ Signup }) {
  const [showpassword, setShowpassword] = useState("false");

  const HandleShowPassword = () => {
    setShowpassword(!showpassword);
  };

  return (
    <>
      <div>
        <Form.Label htmlFor="inputemail">Email</Form.Label>
        <Form.Control
          type="email"
          id="inputdetails"
          aria-describedby="passwordHelpBlock"
          placeholder="Enter your Email"
          className="mb-3"
          required
        />
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
        <button className="Login-button">Login</button>
        <button className="ForgetPassword-button">
          {" "}
          <Link to="/forgot-password" className="ForgetPassword-button">
            {" "}
            Forget Password?{" "}
          </Link>
        </button>

        <hr />
        <p className="Login-or">OR</p>
        <button className="Login-google">
          <Google/>
          Login with Google
        </button>
        <p>
          Don't have an account?{" "}
          <button className="Login__signupButton" onClick={Signup}>
            Sign up / Register
          </button>
        </p>
      </div>
    </>
  );
}

export default Login;
