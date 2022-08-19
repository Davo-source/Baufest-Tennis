
import { useContext } from "react";
import PlayerTable from "../Components/Tables/Players/PlayerTable";
import { PlayersSingleton } from "../Services/PlayersServices";

const Players = () =>{

    let players = useContext(PlayersSingleton);

    return(
        <>
        <h1>Players's Page</h1>
        <PlayerTable players={players}/>
        </>
    )
}

export default Players;