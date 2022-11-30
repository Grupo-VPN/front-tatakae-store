import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

interface ProductProps {
  image: string;
  title: string;
  preco: string;
  descricao: string;
  link_id: string;
}

export default function Product_Card(props: ProductProps) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Card style={{ width: "18rem" }}>
        <div className="imgdiv">
          <img src={props.image} className="img" />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Preço: R$ {props.preco}</Card.Text>
          <Card.Text>{props.descricao}</Card.Text>
          <Button
            variant="primary"
            type="submit"
            onClick={() =>
              navigate(`/Produto/${props.link_id}`, {
                state: {
                  titulo: props.title,
                  image: props.image,
                  descricao: props.descricao,
                  preco: props.preco,
                  id: props.link_id,
                },
              })
            }
          >
            Visualizar
          </Button>
        </Card.Body>
      </Card>
    </S.Container>
  );
}
