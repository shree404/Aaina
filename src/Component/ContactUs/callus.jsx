import { Whatsapp } from "react-bootstrap-icons";

function CallUs() {
  return (
    <>
      <div className="Callus">
        <p className="Callus-p1">Call Us</p>
        <p className="Callus-p2">Our lines are open 24 X 7</p>
        <button className="Callus-button">
        <Whatsapp className="socialMediaIcon"/>  986-7481767
        </button>{" "}
        <br />
        <button className="Callus-button">
        <Whatsapp style={{height:"1.5rem" , width:"1.5rem", fill:'green'}}/> &nbsp;
          986-7481767
        </button>
      </div>
    </>
  );
}

export default CallUs;
