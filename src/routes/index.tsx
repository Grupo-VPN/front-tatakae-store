import { 
    BrowserRouter as Router,
    Route, 
    Routes,
} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";

export default function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        </Router>
    )
}