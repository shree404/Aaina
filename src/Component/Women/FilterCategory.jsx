import Form from "react-bootstrap/Form";

function FilterCategory(){
    return(
        <>
        <Form.Select aria-label="Default select example">
              <option className="Option__button">Best Match</option>
              <option value="1" className="Option__button">
                Price High to Low
              </option>
              <option value="2" className="Option__button">
                Price Low to High
              </option>
              <option value="3" className="Option__button">
                Latest Arrival
              </option>
            </Form.Select>
        </>
    )
}

export default FilterCategory;
