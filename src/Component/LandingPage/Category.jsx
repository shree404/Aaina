import React from "react";
import image from "../../Assets/LandingPage/category.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Category({ Close }) {
  return (
    <>
      <menu className="category">
        <div className="categoryContainer">
          <div className="categoryContainer-Women">
            <dl>
              <dt className="categoryContainer__Topic">Women</dt>
              <hr className="categoryContainer__Line" />
              <dt className="categoryContainer__list">Kurti</dt>
              <dt className="categoryContainer__list">Clothing</dt>
              <dt className="categoryContainer__list">Saree</dt>
              <dt className="categoryContainer__list">Wedding Dresses</dt>
              <dt className="categoryContainer__list">Lehenga</dt>
            </dl>
          </div>
          <div className="categoryContainer-Men">
            <dl>
              <dt className="categoryContainer__Topic">Men</dt>
              <hr className="categoryContainer__Line" />
              <dt className="categoryContainer__list">Clothing</dt>
              <dt className="categoryContainer__list">Shoes</dt>
              <dt className="categoryContainer__list">Accessories</dt>
              <dt className="categoryContainer__list">Wedding Dresses</dt>
              <dt className="categoryContainer__list">Groom set</dt>
            </dl>
          </div>
          <div className="categoryContainer-Bridal">
            <dl>
              <dt className="categoryContainer__Topic">Bridals</dt>
              <hr className="categoryContainer__Line" />
              <dt className="categoryContainer__list">Bridal Lehengas</dt>
              <dt className="categoryContainer__list">Bridal Saris</dt>
              <dt className="categoryContainer__list">Bridal Accessories</dt>
              <dt className="categoryContainer__list">Bridal Jewellery</dt>
              <dt className="categoryContainer__list">Bridal Gown</dt>
            </dl>
          </div>
          <div className="categoryContainer-Lehenga">
            <img src={image} alt="Image of Lehenga" />
            <p className="categoryContainer-Lehenga__p">New designer Lehenga</p>
          </div>
          <div className="categoryContainer-cancel">
            <button
              className="categoryContainer-cancel__button"
              onClick={Close}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.2458 4.75409C15.5702 5.07856 15.5702 5.60463 15.2458 5.92909L11.1749 9.99993L15.2458 14.0708C15.5702 14.3952 15.5702 14.9213 15.2458 15.2458C14.9213 15.5702 14.3952 15.5702 14.0708 15.2458L9.99993 11.1749L5.92909 15.2458C5.60463 15.5702 5.07856 15.5702 4.75409 15.2458C4.42963 14.9213 4.42963 14.3952 4.75409 14.0708L8.82493 9.99993L4.75409 5.92909C4.42963 5.60463 4.42963 5.07856 4.75409 4.75409C5.07856 4.42963 5.60463 4.42963 5.92909 4.75409L9.99993 8.82493L14.0708 4.75409C14.3952 4.42963 14.9213 4.42963 15.2458 4.75409Z"
                  fill="#71717A"
                />
              </svg>
            </button>
          </div>
        </div>
      </menu>
    </>
  );
}

export default Category;
