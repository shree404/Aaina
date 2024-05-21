import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import nav from "../../Assets/LandingPage/logo.png";
import menu from "../../Assets/LandingPage/menu.png";

function NavMobile(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
         <nav className="MobileNav">
        <div className="MobileNav-Container">
          <div className="MobileNav-Container__logo">
            <img src={nav} alt="Logo of the website" />
          </div>
          <div className="MobileNav-Container__menu">
            <button onClick={handleShow}>
              <img
                src={menu}
                alt="Menu Items"
                className="MobileNav-Container__icon"
              />
            </button>
            <Offcanvas show={show} onHide={handleClose} responsive="lg">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="MobileNav-Container__DropdownMenu">
                  <div>
                    <DropdownButton
                      id="MobileNav-Container__Dropdownbutton"
                      title="Women"
                    >
                      <Link
                        id="MobileNav-Container__Dropdownitem"
                        to="/women-kurta"
                      >
                        <Dropdown.Item
                          id="MobileNav-Container__Dropdownitem"
                          as="button"
                        >
                          Kurti
                        </Dropdown.Item>{" "}
                      </Link>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Clothing
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Saree
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Wedding Dresses
                      </Dropdown.Item>
                      <Link
                        id="MobileNav-Container__Dropdownitem"
                        to="/women-kurta"
                      >
                        <Dropdown.Item
                          id="MobileNav-Container__Dropdownitem"
                          as="button"
                        >
                          Lehenga
                        </Dropdown.Item>{" "}
                      </Link>
                    </DropdownButton>
                  </div>
                  <div>
                    <DropdownButton
                      id="MobileNav-Container__Dropdownbutton"
                      title="Men"
                    >
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Clothing
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Shoes
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Accessories
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Wedding Dresses
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Groom set
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div>
                    <DropdownButton
                      id="MobileNav-Container__Dropdownbutton"
                      title="Bridals"
                    >
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Bridal Lehengas
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Bridal Saris
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Bridal Accessories
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Bridal Jewellery
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="MobileNav-Container__Dropdownitem"
                        as="button"
                      >
                        Bridal Gown
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="Navbar-Container-CartSection">
                    <div>
                      Bag <br />
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                      >
                        <path
                          d="M21.5261 14.6667V9.33333C21.5261 7.91885 20.9642 6.56229 19.964 5.5621C18.9638 4.5619 17.6073 4 16.1928 4C14.7783 4 13.4217 4.5619 12.4216 5.5621C11.4214 6.56229 10.8595 7.91885 10.8595 9.33333V14.6667M6.85946 12H25.5261L26.8595 28H5.52612L6.85946 12Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
        </>
    )
}

export default NavMobile