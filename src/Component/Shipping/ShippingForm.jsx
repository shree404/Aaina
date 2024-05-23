import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Shippingform(){
    return(
        <>
        <div className='ShippingForm'>
            <h2>Shipping Details</h2>
            <Form.Check 
            type='checkbox'
            id="checkbox"
            label="Use my Address Details"
            className='mb-5'
          />
          <Row>
            <Col>
          <Form.Label htmlFor="inputname">Full Name</Form.Label>
      <Form.Control
        type="text"
        id="inputdetails"
        aria-describedby="passwordHelpBlock"
        placeholder='Enter Full Name'
        className='mb-3'
        required
      />
      </Col>
      <Col>
      <Form.Label htmlFor="inputphone">Phone Number</Form.Label>
      <Form.Control
        type="tel"
        id="inputdetails"
        aria-describedby="passwordHelpBlock"
        placeholder='Enter Phone Number'
        required
      />
      </Col>
      </Row>
      <Form.Label htmlFor="inputemail">Email</Form.Label>
      <Form.Control
        type="email"
        id="inputdetails"
        aria-describedby="passwordHelpBlock"
        placeholder='Enter Email'
        className='mb-3'
        required
      />
       <Form.Label htmlFor="inputaddress">Address line 1</Form.Label>
      <Form.Control
        type="text"
        id="inputdetails"
        aria-describedby="passwordHelpBlock"
        placeholder='Enter Address'
        className='mb-3'
        required
      />
         <Form.Label htmlFor="inputaddress">Address line 2 (optional)</Form.Label>
      <Form.Control
        type="text"
        id="inputdetails"
        aria-describedby="passwordHelpBlock"
        placeholder='Apartment/Suit'
        className='mb-3'
      />
             <Row>
      <Col>
      <Form.Label htmlFor="inputpostalcode">Postal Code</Form.Label>
      <Form.Control
        type="text"
        id="inputdetails"
        aria-describedby="passwordHelpBlock"
        placeholder='0010/9990'
        required
      />
      </Col>
      <Col>
          <Form.Label htmlFor="inputcity">City</Form.Label>
      <Form.Control
        type="text"
        id="inputdetails"
        aria-describedby="passwordHelpBlock"
        placeholder='Your City'
        className='mb-3'
        required
      />
      </Col>
      </Row>
      <hr />
      <h2>Billing Address</h2>
      <Form.Check 
            type='radio'
            id="radio"
            label="Same as Shipping Address"
            className='mb-5'
          />
          <Form.Check 
            type='radio'
            id="radio"
            label="Use Different Address"
            className='mb-5'
          />

        </div>
        </>
    )
}

export default Shippingform;