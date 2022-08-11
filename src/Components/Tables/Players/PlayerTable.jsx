import React from "react";
import { Table } from "react-bootstrap";
import PlayerMap from "./PlayersMap";

const PlayerTable = ({players})=>{
    return(
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
    )
}


export default PlayerTable;