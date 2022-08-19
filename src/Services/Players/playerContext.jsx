import { createContext } from "react";

const PlayersSingleton = createContext([
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
]
);

export default PlayersSingleton;