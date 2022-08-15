
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"
import { Button, Form } from "react-bootstrap"

const Prueba = () =>
{   
    const formRef = useRef(null);
    
    const property = "Name";

    const playerTest = {
        name: 'Juan',
    }
    const [player1, setPlayer1] = useState(playerTest.name);

    const handleChange = (property, value) => {
        console.log({[property]: value});
        setPlayer1(value);
        console.log(value)
    }

    const handleSubmit = (e,property)=>{
        e.preventDefault();
        console.log(property.checkValidity())
    }

    const hasErrorInForm = false;
    return(
        <>
        <Form ref={formRef} validated={hasErrorInForm}>
            <label htmlFor="Name">Nombre: </label>
            <input 
            type="text" 
            name="Name"
            value={player1}
            onChange={ (e) => handleChange(property,e.target.value) } />
        </Form>
        <Button type="submit" onClick={(e)=> handleSubmit(e, formRef.current)}>Press to see</Button>
        </>
    )
}

export default Prueba;