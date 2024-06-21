import React, { useState, useEffect } from "react";
import { CheckCircleFill, CircleFill } from "react-bootstrap-icons";

function WomenCategoryColor({ onFilterChange }) {
  const [colors, setColors] = useState({
    pink: false,
    green: false,
    yellow: false,
    purple: false,
    red: false,
    white: false
  });

  const toggleColor = (color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [color]: !prevColors[color]
    }));
  };

  useEffect(() => {
    const selectedColors = Object.keys(colors).filter((color) => colors[color]);
    onFilterChange(selectedColors);
  }, [colors, onFilterChange]);

  return (
    <div className="ColorOptionWomen">
      <div className="CategoriesWomen__button1">
        {" "}
        Color Option
        <hr className="CategoriesWomen__line1" />
      </div>
      <div className="CategoriesWomen__colors">
        {Object.keys(colors).map((color) => (
          <button
            key={color}
            onClick={() => toggleColor(color)}
            className={`ColorOptionWomen__color ${colors[color] ? "selected" : ""}`}
          >
            {colors[color] ? (
              <CheckCircleFill className={`ColorOptionWomen-${color}`} />
            ) : (
              <CircleFill className={`ColorOptionWomen-${color}`} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WomenCategoryColor;
