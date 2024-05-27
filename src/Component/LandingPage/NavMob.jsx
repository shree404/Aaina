import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import nav from "../../Assets/LandingPage/logo.png";
import CategoryMob from "./CategoryMob";
import { List } from "react-bootstrap-icons";

function NavMobile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="MobileNav">
        <div className="MobileNav-Container">
          <div className="MobileNav-Container__logo">
            <img src={nav} alt="Logo of the website" />
          </div>
          <div className="MobileNav-Container__menu">
            <button onClick={handleShow}>
             <List id="CategoryIcon"
             />
            </button>
            <Offcanvas show={show} onHide={handleClose} responsive="lg"
            placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <CategoryMob/>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavMobile;
