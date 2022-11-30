import NavScroll from '../../components/navbar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import * as S from './style'

export default function Pagamento(){
    return(
        <S.Container>
            <header>
                <NavScroll/>
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
                                    <td className='imgdiv'><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIo-rsc2YT3K1L-xgYniVdjAukQmdAh8CAneJxSpi7G_GeugqvMPVzGhXiDkRW8TEP8GmkscUbgU71VBZHAl70-J_i3aqQ_dNNqpQsVmKLbDI7G3QlomL6&usqp=CAE" className='img'/></td>
                                    <td>Moletom Canguru Com Estampa Attack On Titans</td>
                                    <td>R$ 79,00</td>
                                </tr>
                            </tbody>
                        </Table>
                </div>

                <div className="dados">
                        <h1>Insira os dados do seu cartão de crédito</h1>
                        <form className='form'>
                            <div className="field">
                                <label htmlFor="numero">Nº Cartão</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label htmlFor="nome">Nome do Titular</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label htmlFor="data">Data de Vencimento</label>
                                <input type="date" />
                            </div>
                            <div className="field">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" maxLength={3}/>
                            </div>
                            <Button variant="success" href='/Home'>Finalizar Pagamento</Button>{' '}
                        </form>
                </div>
            </main>
        </S.Container>
    )
}