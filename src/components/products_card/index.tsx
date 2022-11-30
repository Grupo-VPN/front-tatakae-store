import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as S from './styles'

interface ProductProps{
    image: string;
    title: string;
    preco: string;
    descricao : string;
}

export default function Product_Card(props: ProductProps) {
  return (
    <S.Container>
    <Card style={{ width: '18rem' }}>
        <div className="imgdiv">
            <img src={props.image} className='img'/>
        </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            Preço: R$ {props.preco}
        </Card.Text>
        <Card.Text>
            {props.descricao}
        </Card.Text>
        <Button variant="primary" href='/Produto/1'>Visualizar</Button>
      </Card.Body>
    </Card>
    </S.Container>
  );
}