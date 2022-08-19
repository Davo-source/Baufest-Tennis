import { useState } from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";


const Actions = (props) =>{

    const [isSelected, setIsSelected] = useState(null);

    return(
        <>
      <DropdownButton className="mt-5" id="dropdown-basic-button" title="Actions">
        <Dropdown.Item onClick={props.handleClose}>Add</Dropdown.Item>
        <Dropdown.Item href="#/action-2" disabled>Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Copy</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
      </DropdownButton>
        </>
    )
}

export default Actions;