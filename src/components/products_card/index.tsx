import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as S from "./styles";
import { parseCookies } from "nookies";
import { useCallback, useContext } from "react";
import { AuthContext } from "../../hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";

interface ProductProps {
  image: string;
  title: string;
  preco: string;
  descricao: string;
  link_id: number;
}

interface InputsProps {
  idTela: string;
  IdProduto: number;
  idUsuario: string;
}

export default function Product_Card(props: ProductProps) {
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
          telaId: 3,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies["tatakae.token"]}`,
          },
        }
      )
      .then((data) => {
        navigate(`/Produto/${props.link_id}`, {
          state: {
            titulo: props.title,
            image: props.image,
            descricao: props.descricao,
            preco: props.preco,
            id: props.link_id,
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
      <form onSubmit={handleSubmit(inicioMonitorar)}>
        <Card style={{ width: "18rem" }}>
          <div className="imgdiv">
            <img src={props.image} className="img" />
          </div>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Preço: R$ {props.preco}</Card.Text>
            <Card.Text>{props.descricao}</Card.Text>
            <Button variant="primary" type="submit">
              Visualizar
            </Button>
          </Card.Body>
        </Card>
      </form>
    </S.Container>
  );
}
