import { 
    BrowserRouter,
    Routes,
    Route } from "react-router-dom";
import Home from "../Pages/Home";
import Players from "../Pages/Players";
import Wrapper from "./wrapper";

const App = () => {
    
    return (
        <BrowserRouter>
        <Wrapper>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/players" element={<Players/>}/>
            </Routes>
        </Wrapper>
        </BrowserRouter>
    )
}

export default App;