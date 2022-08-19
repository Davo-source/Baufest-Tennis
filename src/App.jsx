import { 
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import Wrapper from "./Components/wrapper";
import Prueba from "./Components/Form/Prueba";
import PlayersServices from "./Services/PlayersServices";


const App = () => {
    
    return (
        <BrowserRouter>
        <Wrapper>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/players" element={
                    <PlayersServices>
                        <Players/>
                    </PlayersServices>
                }/>
                <Route path="/court" element={<Prueba/>}/>
            </Routes>
        </Wrapper>
        </BrowserRouter>
    )
}

export default App;