import NavScroll from '../../components/navbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import * as S from './styles'

export default function Carrinho(){
    return(
        <S.Container>
            <header>
                <NavScroll/>
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
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='imgdiv'><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIo-rsc2YT3K1L-xgYniVdjAukQmdAh8CAneJxSpi7G_GeugqvMPVzGhXiDkRW8TEP8GmkscUbgU71VBZHAl70-J_i3aqQ_dNNqpQsVmKLbDI7G3QlomL6&usqp=CAE" className='img'/></td>
                                    <td>Moletom Canguru Com Estampa Attack On Titans</td>
                                    <td>R$ 79,00</td>
                                    <td>
                                        <Button variant="primary">Visualizar</Button>{' '}
                                        <Button variant="danger">Remover</Button>{' '}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="finalizar">
                        <Button variant="success" href='/Pagamento'>Comprar</Button>{' '}
                    </div>
                </div>
            </main>
        </S.Container>
    )
}