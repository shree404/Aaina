import Form from "react-bootstrap/Form";

function OrderDropDown() {
  return (
    <>
      <div className="OrderDropDown">
      <Form.Select aria-label="Default select example">
        <option> Show: Last 5 Orders</option>
        <option value="1"> Show: Last 15 days</option>
        <option value="2"> Show: Last 30 days</option>
        <option value="3"> Show: Last 6 months</option>
        <option value="3"> Show: Order Placed in 2024</option>
        <option value="3"> Show: All Orders</option>
      </Form.Select>
      </div>
    </>
  );
}

export default OrderDropDown;
