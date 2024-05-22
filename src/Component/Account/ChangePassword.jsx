import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ChangePassword(){
    return(
        <>
        <FloatingLabel   controlId="floatingPassword" label=" Current Password" className='mb-2'>
        <Form.Control   id="edituserdetails"  type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel    controlId="floatingPassword" label=" New Password" className='mb-2'>
        <Form.Control  id="edituserdetails"  type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel    controlId="floatingPassword" label="Retype Password" className='mb-2'>
        <Form.Control  id="edituserdetails"  type="password" placeholder="Password" />
      </FloatingLabel>
        </>
    )
}

export default ChangePassword;