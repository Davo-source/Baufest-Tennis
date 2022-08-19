import Players from "../../Pages/Players";
import PlayersSingleton from "./playerContext";

const PlayersServices = () => {

    let players = [
        {
            id: 1,
            name:"Roberto Carlos",
            points: 12
        },
        {
            id: 2,
            name:"Maria Jose",
            points: 20
        },
        {
            id: 3,
            name:"Paco Enchiladas",
            points: 7
        }
    ];

    return(
        <PlayersSingleton.Provider value={
            players
        }>
            <Players />
        </PlayersSingleton.Provider>
    )
};

export default PlayersServices;