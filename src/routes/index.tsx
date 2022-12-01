import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import Carrinho from "../pages/carrinho";
import Home from "../pages/home";
import Login from "../pages/login";
import Pagamento from "../pages/pagamento";
import TelaPrincipal from '../pages/primeira tela';
import Produto from "../pages/produto";

export default function Rotas() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Login />} />
      <Route path="/Inicio" element={<TelaPrincipal />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Produto/:id" element={<Produto />} />
      <Route path="/Carrinho" element={<Carrinho />} />
      <Route path="/Pagamento" element={<Pagamento />} />
    </RoutesWrapper>
  );
}
