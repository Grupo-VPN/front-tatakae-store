import NavScroll from "../../components/navbar";
import * as S from "./styles";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Produto() {
  const location = useLocation();

  console.log(location.state);

  return (
    <S.Container>
      <header>
        <NavScroll />
      </header>
      <main>
        <div className="product">
          <div className="imgdiv">
            <img src={location.state.image} className="img" />
          </div>
          <div className="title">
            <h1>{location.state.titulo}</h1>
          </div>
          <div className="price">
            <h1>Preço: R${location.state.preco}</h1>
          </div>
          <div className="descricao">
            <h1>{location.state.descricao}</h1>
          </div>
          <Button variant="primary" className="button" href="/Carrinho">
            Adicionar ao Carrinho
          </Button>{" "}
        </div>
      </main>
    </S.Container>
  );
}
