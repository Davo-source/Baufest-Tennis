import React, { useState, useContext } from "react";
import { Table, Button } from "react-bootstrap";
import ModalComponent from "../../Modal/ModalComponent";
import { singleTon } from "../../Services/ModalServices";
import PlayerMap from "./PlayersMap";

const PlayerTable = ({players})=>{

    const [show, setShow, ModalFunctions, handleClose] = useContext(singleTon);

    return(
        <>        
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
<Button variant="primary" onClick={handleClose}> Create</Button>
<ModalComponent 
show={show}
ModalFunctions={ModalFunctions.savePlayer}
handleClose={handleClose}
/>
    </>
    )
}


export default PlayerTable;