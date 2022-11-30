import NavScroll from '../../components/navbar'
import * as S from './styles'
import Button from 'react-bootstrap/Button';

export default function Produto(){
    return(
        <S.Container>
            <header>
                <NavScroll/>
            </header>
            <main>
                <div className="product">
                    <div className="imgdiv">
                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIo-rsc2YT3K1L-xgYniVdjAukQmdAh8CAneJxSpi7G_GeugqvMPVzGhXiDkRW8TEP8GmkscUbgU71VBZHAl70-J_i3aqQ_dNNqpQsVmKLbDI7G3QlomL6&usqp=CAE" className='img' />
                    </div>
                    <div className="title">
                        <h1>
                        Moletom Canguru Com Estampa Attack On Titans
                        </h1>
                    </div>
                    <div className="price">
                        <h1>
                            Preço: R$ 79,00
                        </h1>
                    </div>
                    <div className="descricao">
                        <h1>
                            Masculino · P · Com capuz
                        </h1>
                    </div>
                    <Button variant="primary" className='button' href='/Carrinho'>Adicionar ao Carrinho</Button>{' '}
                </div>
            </main>
        </S.Container>
    )
}