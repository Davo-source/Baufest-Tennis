import { 
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import Wrapper from "./Components/wrapper";
import Prueba from "./Components/Form/Prueba";

const App = () => {
    
    return (
        <BrowserRouter>
        <Wrapper>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/players" element={<Players/>}/>
                <Route path="/court" element={<Prueba/>}/>
            </Routes>
        </Wrapper>
        </BrowserRouter>
    )
}

export default App;