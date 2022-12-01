import NavScroll from "../../components/navbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as S from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { parseCookies } from "nookies";
import { useCallback, useContext } from "react";
import { AuthContext } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
interface InputsProps {
  idTela: string;
  IdProduto: number;
  idUsuario: string;
}
export default function Carrinho() {
  const cookies = parseCookies();
  const { signIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const iniciarMonitoramento = useCallback(async (data: InputsProps) => {
    await api
      .post<InputsProps>(
        `/monitorar`,
        {
          usuarioId: Number(user?.id),
          telaId: 5,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies["tatakae.token"]}`,
          },
        }
      )
      .then(() => {
        navigate("/Pagamento", {
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
  const location = useLocation();
  return (
    <S.Container>
      <header>
        <NavScroll />
      </header>
      <main>
        <div className="carrinho">
          <div className="title">
            <h1>Itens no Carrinho</h1>
          </div>
          <div className="table">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Imagem</th>
                  <th>Produto</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="imgdiv">
                    <img src={location.state.data.image} className="img" />
                  </td>
                  <td>{location.state.data.titulo}</td>
                  <td>R$ {location.state.data.preco}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="finalizar">
            <form onSubmit={handleSubmit(inicioMonitorar)}>
              <button>Comprar</button>{" "}
            </form>
          </div>
        </div>
      </main>
    </S.Container>
  );
}
