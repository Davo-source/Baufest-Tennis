import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import Actions from "../../Dropdowns/Actions";
import ModalComponent from "../../Modal/ModalComponent";
import { singleTon } from "../../../Services/ModalServices";
import PlayerMap from "./PlayersMap";

const PlayerTable = ({players})=>{

    const [show, setShow, ModalFunctions, handleClose] = useContext(singleTon);

    return(
        <> 
        <Actions 
        handleClose={handleClose} />   
<Table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
        <PlayerMap players={players}/>
    </tbody>
</Table>

<ModalComponent 
show={show}
ModalFunctions={ModalFunctions.savePlayer}
handleClose={handleClose}
/>
    </>
    )
}


export default PlayerTable;