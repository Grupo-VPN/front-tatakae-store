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

interface InputsProps {
  idTela: string;
  idUsuario: string;
}

export default function Home() {
  const { signIn, user } = useContext(AuthContext);
  const location = useLocation();
  const cookies = parseCookies();

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
      .then(({ data }: any) => {
        navigate("/Home", {
          state: {
            data: data,
          },
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  const terminoMonitoramento = useCallback(async (data: InputsProps) => {
    await api
      .put<InputsProps>(
        `/monitorar/${Number(location.state.data)}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies["tatakae.token"]}`,
          },
        }
      )
      .then(({ data }: any) => {
        console.log(data);
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
  const terminoMonitorar = useCallback(
    async (data: InputsProps) => {
      terminoMonitoramento(data);
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
        <h1>Produtos Tatakae</h1>
        <div className="products">
          <form onSubmit={handleSubmit(terminoMonitorar)}>
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
                <button
                  type="submit"
                  onClick={() =>
                    navigate(`/Produto/${p.id}`, {
                      state: {
                        titulo: p.title,
                        image: p.image,
                        descricao: p.descricao,
                        preco: p.preco,
                        id: p.id,
                      },
                    })
                  }
                >
                  Iniciar
                </button>
              </div>
            ))}
          </form>
        </div>
        <form onSubmit={handleSubmit(inicioMonitorar)}>
          <button type="submit">Iniciar</button>
        </form>
      </main>
    </S.Container>
  );
}
