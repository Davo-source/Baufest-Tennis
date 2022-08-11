import PlayerTable from "../Components/Tables/Players/PlayerTable";

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

const Players = () =>{
    return(
        <>
        <h1>Players's Page</h1>
        <PlayerTable players={players}/>
        </>
    )
}

export default Players;