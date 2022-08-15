import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"


const ModalComponent = (props) =>{
    console.log(props)
    return(
        <>
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>{props.ModalFunctions.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {props.handleClose}>Close</Button>
                <Button variant="primary">{props.ModalFunctions.function}</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default ModalComponent;