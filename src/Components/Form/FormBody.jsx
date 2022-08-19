import { useState } from "react";
import { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormBody = (props) => {

    const refForm = useRef(null);
    const [hasErrorInForm, setHasErrorInForm] = useState(false);

    const handleSubmit=(e, refForm)=>{
        if(refForm.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setHasErrorInForm(true);
    }

    return (
        <>
        <Form ref={refForm} noValidate validated={hasErrorInForm} onSubmit={(e)=> handleSubmit(e,refForm.current)}>
            <Row>
            <Form.Group as={Col}>
            <Form.Label htmlFor="Name" className="m-3">Name* </Form.Label>
                <Form.Control 
                name="Name" 
                type="text"
                placeholder="Name"
                required
                 /> 
                 <Form.Control.Feedback className="ml-2" type="invalid">
                    ¡¡Please place a Name!!
                 </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label htmlFor="points" className="m-3">Points* </Form.Label>
                <Form.Control 
                name="points" 
                type="text"
                placeholder="Points"
                required /> 
                <Form.Control.Feedback className="ml-2" type="invalid">
                   ¡¡Place the number of points!!   
                </Form.Control.Feedback> 
            </Form.Group>
            </Row>
            
            <div className="d-grid gap-2 mt-4">
            <Button variant="success" size="lg" type="submit" onClick={handleSubmit}>{props.ModalFunctions}</Button>
            </div>
                     
        </Form>
        
        </>
    )
};

export default FormBody;