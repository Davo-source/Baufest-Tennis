import { useContext } from "react";
import { Form } from "react-bootstrap";
import { CheckboxSingleton } from "../../Services/Chechkbox/CheckboxServices";

const Checkbox = (props) => {

    const [checked, handleChange] = useContext(CheckboxSingleton); 

    return (
        <>
        <Form>
            <Form.Check
            id={`${props.id}-radio`}
            label={props.id} 
            onChange={handleChange}
            />
        </Form>
        </>
    )
}

export default Checkbox;