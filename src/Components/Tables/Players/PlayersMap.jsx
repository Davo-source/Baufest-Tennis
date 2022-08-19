import Checkbox from "../../Form/CheckBox";

const PlayerMap = ({players}) => {
    return players.map(player => {
        return(
            <tr key={`tr-${player.id}`}>
                
                <td>
                <Checkbox id={player.id} />
                    </td>
                <td>{player.name}</td>
                <td>{player.points}</td>
            </tr>
        )
    })
};

export default PlayerMap;