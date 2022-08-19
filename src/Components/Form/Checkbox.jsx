import { useState } from "react";
import { Form } from "react-bootstrap";

const Checkbox = (props) => {

    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked);
        console.log(checked);
        console.log(props.id)
    }

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