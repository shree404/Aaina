import redbutton from "../../Assets/Women/buttonred.png";
import yellowbutton from "../../Assets/Women/button yellow.png";
import greenbutton from "../../Assets/Women/buttonblack.png";
import pinkbutton from "../../Assets/Women/buttonpink.png";
import whitebutton from "../../Assets/Women/buttonwhite.png";
import graybutton from "../../Assets/Women/button gray.png";
import { useState } from "react";

function WomenCategoryColor({ onFilterChange }) {
  const [red, setRed] = useState(true);
  const [white, setWhite] = useState(true);
  const [pink, setPink] = useState(true);
  const [yellow, setYellow] = useState(true);
  const [green, setgreen] = useState(true);
  const [purple, setpurple] = useState(true);

  const [color , setColor] = useState(false)

  const handleFilterChange = () => {
    const selectedColors = [];
    if (pink) {
      selectedColors.push("pink");
      setPink(false);
    }
    if (red) {
      selectedColors.push("red");
      setRed(false);
    }
    if (white) {
      selectedColors.push("white");
      setWhite(false);
    }
    if (yellow) {
      selectedColors.push("yellow");
      setYellow(false);
    }
    if (green) {
      selectedColors.push("green");
      setgreen(false);
    }
    if (purple) {
      selectedColors.push("purple");
      setpurple(false);
    }

    onFilterChange(selectedColors);
  };
  return (
    <div className="ColorOptionWomen">
      <div className="CategoriesWomen__button1">
        {" "}
        Color Option
        <hr className="CategoriesWomen__line1" />
      </div>
      <div className="CategoriesWomen__colors">
        <button
          onClick={() => {
            setPink(!pink);
            handleFilterChange();
          }}
          className="ColorOptionWomen__color"
        >
          {pink ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="16" fill="#94577E" />
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#EF88A2"
              />
            </svg>
          ) : (
            <img src={pinkbutton} alt="PinkButton" />
          )}
        </button>
        <button
          onClick={() => {
            setgreen(!green);
            handleFilterChange();
          }}
          className="ColorOptionWomen__color"
        >
          {green ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="16" fill="#DD130C" />
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#033538"
              />
            </svg>
          ) : (
            <img src={greenbutton} alt="green Button" />
          )}
        </button>
        <button
          onClick={() => {
            setYellow(!yellow);
            handleFilterChange();
          }}
          className="ColorOptionWomen__color"
        >
          {yellow ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="16" fill="#219653" />
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#D3B633"
              />
            </svg>
          ) : (
            <img src={yellowbutton} alt="Yellow Button" />
          )}
        </button>
        <button
          onClick={() => {
            setpurple(!purple);
            handleFilterChange();
          }}
          className="ColorOptionWomen__color"
        >
          {purple ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="16" fill="#F3AF48" />
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#8478BC"
              />
            </svg>
          ) : (
            <img src={graybutton} alt="Gray Button" />
          )}
        </button>
        <button
          onClick={() => {
            setRed(!red);
            handleFilterChange();
          }}
          className="ColorOptionWomen__color"
        >
          {red ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="16" fill="#3D4853" />
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#C30024"
              />
            </svg>
          ) : (
            <img src={redbutton} alt="REd Button" />
          )}
        </button>
        <button
          onClick={() => {
            setWhite(!white);
            handleFilterChange();
          }}
          className="ColorOptionWomen__color"
        >
          {white ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="16" fill="#D8DADD" />
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                fill="#D8DADD"
              />
            </svg>
          ) : (
            <img src={whitebutton} alt="White Button" />
          )}
        </button>
      </div>
      <div>
        <div className="CategoriesWomen__button1">
          {" "}
          Price Filter
          <hr className="CategoriesWomen__line1" />
        </div>{" "}
        <div className="CategoriesWomen__pricefilter">
          <button className="CategoriesWomen__buttonmin">min</button>
          <button className="CategoriesWomen__buttonmin">max</button>
          <button className="CategoriesWomen__buttonapply">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default WomenCategoryColor;
