import { Col, Container, Row } from "react-bootstrap"
import NavBar from "./Navbar";


const Wrapper = ({children}) =>{
    return(
        <>
        <NavBar/>
        <Container>
            <Row>
                <Col>
                {children}
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default Wrapper;