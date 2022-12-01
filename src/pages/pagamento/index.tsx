import NavScroll from "../../components/navbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as S from "./style";
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
export default function Pagamento() {
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
          telaId: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies["tatakae.token"]}`,
          },
        }
      )
      .then(() => {
        navigate("/Home", {
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
        <div className="produtos">
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
                  <img src={location.state.data.data.image} className="img" />
                </td>
                <td>{location.state.data.data.titulo}</td>
                <td>R$ {location.state.data.data.preco}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="dados">
          <h1>Insira os dados do seu cartão de crédito</h1>
          <form className="form" onSubmit={handleSubmit(inicioMonitorar)}>
            <div className="field">
              <label htmlFor="numero">Nº Cartão</label>
              <input required type="text" />
            </div>
            <div className="field">
              <label htmlFor="nome">Nome do Titular</label>
              <input required type="text" />
            </div>
            <div className="field">
              <label htmlFor="data">Data de Vencimento</label>
              <input required type="date" />
            </div>
            <div className="field">
              <label htmlFor="cvv">CVV</label>
              <input required type="text" maxLength={3} />
            </div>
            <button type="submit">Finalizar Pagamento</button>{" "}
          </form>
        </div>
      </main>
    </S.Container>
  );
}
