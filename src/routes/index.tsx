import { 
    BrowserRouter as Router,
    Route, 
    Routes,
} from "react-router-dom";
import Carrinho from "../pages/carrinho";
import Home from "../pages/home";
import Login from "../pages/login";
import Pagamento from "../pages/pagamento";
import Produto from "../pages/produto";

export default function Rotas(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Produto/:id" element={<Produto/>}/>
                <Route path="/Carrinho" element={<Carrinho/>}/>
                <Route path="/Pagamento" element={<Pagamento/>}/>
            </Routes>
        </Router>
    )
}