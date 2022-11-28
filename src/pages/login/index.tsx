import Tatakae_Icon from "../../components/tatakae_icon";
import * as S from './styles';

export default function Login(){
    return(
        <S.Container>
            <header>
                <Tatakae_Icon width={"368"} height={"56"}/>
            </header>
            <main>
                <form>
                    <div className="field">
                        <label htmlFor="Email">E-mail</label>
                        <input type="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="Senha">Senha</label>
                        <input type="password" />
                    </div>
                    <button type="submit">Logar</button>
                </form>
            </main>
        </S.Container>
    )
}