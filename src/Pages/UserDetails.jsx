import { useState } from "react";
import arrow from "../Assets/arrow_back.svg";
import whatsapp from "../Assets/ProductLehenga/whatsapp.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function UserDetails({ Close }) {

  function openWhatsAppChat() {
    var phoneNumber = '+9779867481767';
    var url = 'https://wa.me/' + phoneNumber;
    window.open(url, '_blank');
}

const [formdata , setFormdata] = useState({
username:"",
email:"",
phoneno:"",
message:"",
});



  return (
      <>
      <hr className="userdetails__line" />
        <form className="userdetails__form" method="post" onSubmit={openWhatsAppChat}>
        <FloatingLabel
          className="mb-3"
          controlId="floatingtext"
          label="Full Name"
          id="userdetails"
        >
          <Form.Control type="text" id="userdetails" name="username" required placeholder="Full Name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
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
          className="mb-3"
        >
          <Form.Control
            type="tel"
            id="userdetails"
            placeholder="Phone no"
            required
            name="phoneno"
          />
        </FloatingLabel>
        <FloatingLabel id="userdetails" controlId="floatingTextarea2" label="Message(optional)">
        <Form.Control
         id="userdetails"
          as="textarea"
          name="message"
          placeholder="Elevate your style with Aina's unique craftsmanship"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
        <button className="userdetails__goback  " onClick={Close}>
          {" "}
          <img src={arrow} alt="Left Arrow" /> &nbsp; Go back
        </button>
        <button className="userdetails__whatsapporder" type="submit" >
          <img src={whatsapp} alt="Icon of Whatsapp"  /> &nbsp; WhatsApp Order
        </button>
        </form>
    </>
  );
}

export default UserDetails;
