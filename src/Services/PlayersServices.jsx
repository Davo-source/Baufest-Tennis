import { createContext } from "react";

 
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

export const PlayersSingleton = createContext();

const PlayersServices = (props) => {
    return(
        <PlayersSingleton.Provider value={
            players
        }>
            {props.children}
        </PlayersSingleton.Provider>
    )
};

export default PlayersServices;