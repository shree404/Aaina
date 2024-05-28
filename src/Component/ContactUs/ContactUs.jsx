import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ContactUs() {
  return (
    <>
      <div className="ContactUS">
        <h2 className="ContactUS-head">Contact us</h2>
        <p className="ContactUS-p">
          {" "}
          Please fill out the <span className="ContactUS-p__word"> form</span>,
          and our representative will get back to you shortly.
        </p>
        <form className="userdetails__form" method="post">
          <FloatingLabel
            className="mb-4"
            controlId="floatingtext"
            label="Full Name"
            id="userdetails"
          >
            <Form.Control
              type="text"
              id="userdetails"
              name="username"
              required
              placeholder="Full Name"
            />
          </FloatingLabel>
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
          <FloatingLabel
            controlId="floatingnumber"
            id="userdetails"
            label="Phone no"
            className="mb-4"
          >
            <Form.Control
              type="tel"
              id="userdetails"
              placeholder="Phone no"
              required
              name="phoneno"
            />
          </FloatingLabel>
          <FloatingLabel
            id="userdetails"
            controlId="floatingTextarea2"
            label="Message(optional)"
          >
            <Form.Control
              id="userdetails"
              as="textarea"
              name="message"
              placeholder="Elevate your style with Aina's unique craftsmanship"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <button className="ContactUS-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
