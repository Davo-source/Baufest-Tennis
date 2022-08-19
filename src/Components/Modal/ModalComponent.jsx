import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import FormBody from "../Form/FormBody"


const ModalComponent = (props) =>{
    return(
        <>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>{props.ModalFunctions.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Modal body text goes here.</p>
                <FormBody 
                ModalFunctions={props.ModalFunctions.function}/>
            </Modal.Body>
                
            <Modal.Footer>
                <Button variant="secondary" onClick = {props.handleClose}>Close</Button>
               
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default ModalComponent;