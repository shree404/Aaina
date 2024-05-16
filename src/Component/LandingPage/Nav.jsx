import React, { useState } from "react";
import nav from "../../Assets/LandingPage/logo.png";
import menu from "../../Assets/LandingPage/menu.png";
import Category from "./Category";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import OrderSummary from "../../Pages/orderSummary";

function Nav() {
  const [toggle, setToggle] = useState();
  const ToggleCategory = () => {
    setToggle(!toggle);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav>
        <div className="navBar">
          <div className="Navbar-Container__logo">
            <img src={nav} alt="Logo of Aina" />
          </div>

          <div className="Navbar-Container-middleSection">
            <div className="Navbar-Container-middleSection-Category">
              <button
                onClick={ToggleCategory}
                className="Navbar-Container-middleSection-Category__button"
              >
                Categories &nbsp;{" "}
                <img
                  src={menu}
                  alt="Menu Icon"
                  className="Navbar-Container-middleSection-Category__icon"
                />{" "}
              </button>
              <button
                onClick={ToggleCategory}
                className="Navbar-Container-middleSection-Category__button2"
              >
                <img
                  src={menu}
                  alt="Menu Icon"
                  className="Navbar-Container-middleSection-Category__icon"
                />{" "}
              </button>
            </div>
          </div>
          <div className="Navbar-Container-middleSection-SearchOption">
            <div className="Navbar-Container-middleSection-SearchOption-section">
              <search>
                <input
                  type="text"
                  className="Navbar-Container-middleSection-SearchOption__area"
                  placeholder="I'm Shopping for . . ."
                />
              </search>
            </div>
            <div className="Navbar-Container-middleSection-SearchOption__buttonContainer">
              <button className="Navbar-Container-middleSection-SearchOption__button">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M14.1929 14L10.1929 10M11.5262 6.66667C11.5262 7.2795 11.4055 7.88634 11.171 8.45252C10.9365 9.01871 10.5927 9.53316 10.1594 9.9665C9.72603 10.3998 9.21158 10.7436 8.64539 10.9781C8.07921 11.2126 7.47237 11.3333 6.85954 11.3333C6.2467 11.3333 5.63987 11.2126 5.07368 10.9781C4.5075 10.7436 3.99305 10.3998 3.55971 9.9665C3.12637 9.53316 2.78262 9.01871 2.5481 8.45252C2.31358 7.88634 2.19287 7.2795 2.19287 6.66667C2.19287 5.42899 2.68454 4.242 3.55971 3.36683C4.43488 2.49167 5.62186 2 6.85954 2C8.09721 2 9.2842 2.49167 10.1594 3.36683C11.0345 4.242 11.5262 5.42899 11.5262 6.66667Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                </div>{" "}
                <div> Search </div>
              </button>
            </div>
          </div>
          <button onClick={handleShow} className="Navbar-Container-CartSection">
            <div className="Navbar-Container-CartSection__p">
              Bag <br /> 2 Items
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
          </button>
          <Offcanvas
            show={show}
            placement="end"
            onHide={handleClose}
            id="OrderSummary"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                {" "}
                <span className="OrderSummary__header">Order Summary</span>{" "}
                <span className="OrderSummary__header1"> (2) items</span>{" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <OrderSummary />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        {toggle && <Category Close={ToggleCategory} />}
      </nav>
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
  );
}

export default Nav;
