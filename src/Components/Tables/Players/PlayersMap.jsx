
const PlayerMap = ({players}) => {
    console.log(players)
    return players.map(player => {
        return(
            <tr key={`tr-${player.id}`}>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td>{player.points}</td>
            </tr>
        )
    })
};

export default PlayerMap;