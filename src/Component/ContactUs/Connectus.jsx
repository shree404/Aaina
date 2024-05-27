
import { Instagram , TwitterX , Tiktok , Facebook } from "react-bootstrap-icons";

function ConnectWithUs() {
  return (
    <>
      <div className="Connectus">
        <p className="Connectus-p1">Connect With us</p>
        <div className="Connectus-buttons">
          <button className="Connectus__button" >
           <Instagram className="socialMediaIcon"/> 
             Instagram
          </button>
          <button className="Connectus__button">
            {" "}
            <Facebook className="socialMediaIcon"/>  Facebook{" "}
          </button>
          <button className="Connectus__button">
          <TwitterX className="socialMediaIcon"/>
             Twitter
          </button>
          <button className="Connectus__button">
            <Tiktok className="socialMediaIcon"/>  Tiktok
          </button>
        </div>
      </div>
    </>
  );
}

export default ConnectWithUs;
