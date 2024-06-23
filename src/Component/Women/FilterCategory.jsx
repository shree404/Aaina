import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function FilterCategory({ onSortChange }) {
  const [selectedOption, setSelectedOption] = useState("Best Match");

  const handleDropdownSelect = (eventKey, event) => {
    const option = event.target.textContent;
    setSelectedOption(option);
    onSortChange(option);
  };

  return (
    <>
      <Dropdown onSelect={handleDropdownSelect}>
        <Dropdown.Toggle className="Options">{selectedOption}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="Options_button" eventKey="1">
            Best Match
          </Dropdown.Item>
          <Dropdown.Item id="Options_button" eventKey="2">
            Price High To Low
          </Dropdown.Item>
          <Dropdown.Item id="Options_button" eventKey="3">
            Price Low To High
          </Dropdown.Item>
          <Dropdown.Item id="Options_button" eventKey="4">
            Latest Arrival
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default FilterCategory;
