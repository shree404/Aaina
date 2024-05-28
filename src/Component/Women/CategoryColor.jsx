
import { useState } from "react";
import { CheckCircleFill, CircleFill } from "react-bootstrap-icons";

function WomenCategoryColor({ onFilterChange }) {


  const [colors , setColor] = useState({
    pink:false,
    green:false,
    yellow:false,
    purple:false,
    red:false,
    white:false
  })

  const handleFilterChange = () => {
    const selectedColors = Object.keys(colors).filter(color => colors[color]);
    onFilterChange(selectedColors);
  };

  const toggleColor = (color) => {
    setColor(prevColors => ({
      ...prevColors,
      [color]: !prevColors[color]
    }));
  };
  
  return (
    <div className="ColorOptionWomen">
      <div className="CategoriesWomen__button1">
        {" "}
        Color Option
        <hr className="CategoriesWomen__line1" />
      </div>
      <div className="CategoriesWomen__colors">
        {Object.keys(colors).map(color => (
          <button
            key={color}
            onClick={() => {
              toggleColor(color);
              handleFilterChange();
            }}
            className={`ColorOptionWomen__color`}
          >
            {colors[color] ? <CheckCircleFill className={` ColorOptionWomen-${color}`} /> : <CircleFill className={` ColorOptionWomen-${color}`} />}
          </button>
        ))}
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
