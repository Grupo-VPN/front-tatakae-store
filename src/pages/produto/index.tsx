import NavScroll from "../../components/navbar";
import * as S from "./styles";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { parseCookies } from "nookies";
import { useCallback, useContext } from "react";
import { AuthContext } from "../../hooks/auth";
import { api } from "../../service/api";
import { useForm } from "react-hook-form";

interface InputsProps {
  idTela: string;
  IdProduto: number;
  idUsuario: string;
}
export default function Produto() {
  const location = useLocation();
  const cookies = parseCookies();
  const { signIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const iniciarMonitoramento = useCallback(async (data: InputsProps) => {
    await api
      .post<InputsProps>(
        `/monitorar`,
        {
          usuarioId: Number(user?.id),
          telaId: 4,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies["tatakae.token"]}`,
          },
        }
      )
      .then(() => {
        navigate("/Carrinho", {
          state: {
            data: location.state,
          },
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const inicioMonitorar = useCallback(
    async (data: InputsProps) => {
      iniciarMonitoramento(data);
    },
    [iniciarMonitoramento]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>({
    mode: "onBlur",
  });
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
          <form onSubmit={handleSubmit(inicioMonitorar)}>
            <button className="button">Adicionar ao Carrinho</button>{" "}
          </form>
        </div>
      </main>
    </S.Container>
  );
}
