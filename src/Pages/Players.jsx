
import { useContext } from "react";
import PlayerTable from "../Components/Tables/Players/PlayerTable";

import useHookContext from "../Components/Hooks/useHookContext";

const Players = () =>{

    const players = useHookContext();

    console.log(players)

    return(
        <>
        <h1>Players's Page</h1>
        <PlayerTable players={players}/>
        </>
    )
}

export default Players;