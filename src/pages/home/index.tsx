import NavScroll from '../../components/navbar'
import * as S from './styles'

export default function Home(){
    return (
        <S.Container>
            <header>
                <NavScroll/>
            </header>
            <main>
                <h1>Home</h1>
            </main>
        </S.Container>
    )
}