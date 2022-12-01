import NavScroll from "../../components/navbar";
import Product_Card from "../../components/products_card";
import * as S from "./styles";
import { Products } from "./json";
import { parseCookies } from "nookies";
import { useCallback, useContext } from "react";
import { AuthContext } from "../../hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <S.Container>
      <header>
        <NavScroll />
      </header>
      <main>
        <h1>Produtos Tatakae</h1>
        <div className="products">
          {Products.map((p) => (
            <div key={p.id}>
              <Product_Card
                image={p.image}
                title={p.title}
                preco={p.preco}
                descricao={p.descricao}
                key={p.title}
                link_id={p.id}
              />
            </div>
          ))}
        </div>
      </main>
    </S.Container>
  );
}
