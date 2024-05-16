import arrow from "../Assets/arrow_back.svg";
import whatsapp from "../Assets/ProductLehenga/whatsapp.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function UserDetails({ Close }) {
  return (
      <>
      <hr className="userdetails__line" />
        <form className="userdetails__form" method="post">
        <FloatingLabel
          className="mb-3"
          controlId="floatingtext"
          label="Full Name"
        >
          <Form.Control type="text" id="userdetails" placeholder="Full Name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            id="userdetails"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          id="userdetails"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            id="userdetails"
            placeholder="Password"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Message(optional)">
        <Form.Control
        id="userdetails"
          as="textarea"
          required
          placeholder="Elevate your style with Aina's unique craftsmanship"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
        <button className="userdetails__goback  " onClick={Close}>
          {" "}
          <img src={arrow} alt="Left Arrow" /> &nbsp; Go back
        </button>
        <button className="userdetails__whatsapporder" type="submit">
          <img src={whatsapp} alt="Icon of Whatsapp" /> &nbsp; WhatsApp Order
        </button>
        </form>
    </>
  );
}

export default UserDetails;
