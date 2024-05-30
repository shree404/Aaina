import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function FilterCategory() {
  const [selectedOption, setSelectedOption] = useState("Best Match");

  const handleDropdownSelect = (eventKey, event) => {
    setSelectedOption(event.target.textContent);
  };
  return (
    <>
      <Dropdown onSelect={handleDropdownSelect}>
        <Dropdown.Toggle className="Options">{selectedOption}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="Options_button" eventKey="1" >
            Best Match
          </Dropdown.Item>
          <Dropdown.Item id="Options_button" eventKey="2"  >
            Price High To Low
          </Dropdown.Item>
          <Dropdown.Item id="Options_button"  eventKey="3" >
            Price Low To High
          </Dropdown.Item>
          <Dropdown.Item id="Options_button" eventKey="4"  >
            Latest Arrival
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default FilterCategory;
