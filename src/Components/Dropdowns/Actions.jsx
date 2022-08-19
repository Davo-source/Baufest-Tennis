import { useContext, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { CheckboxSingleton } from "../../Services/Chechkbox/CheckboxServices";


const Actions = (props) =>{

    useEffect(()=>{
      console.log(checked)
    },[checked])

    const [checked, handleChange] = useContext(CheckboxSingleton);

    return(
        <>
      <DropdownButton className="mt-5" id="dropdown-basic-button" title="Actions">
        <Dropdown.Item onClick={props.handleClose}>Add</Dropdown.Item>
        <Dropdown.Item href="#/action-2" disabled={checked}>Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Copy</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Delete</Dropdown.Item>
      </DropdownButton>
        </>
    )
}

export default Actions;