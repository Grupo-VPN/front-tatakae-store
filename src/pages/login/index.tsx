import { parseCookies } from "nookies";
import { useCallback, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Tatakae_Icon from "../../components/tatakae_icon";
import { AuthContext } from "../../hooks/auth";
import { api } from "../../service/api";
import * as S from "./styles";

interface InputsProps {
  email: string;
  senha: string;
}

export default function Login() {
  const cookies = parseCookies();
  const { signIn, user } = useContext(AuthContext);

  const onSubmit = useCallback(async (data: InputsProps) => {
    await signIn(data);
  }, []);

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
        <Tatakae_Icon width={"368"} height={"56"} />
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="Email">E-mail</label>
            <input type="email" {...register("email")} />
          </div>
          <div className="field">
            <label htmlFor="Senha">Senha</label>
            <input type="password" {...register("senha")} />
          </div>
          <button type="submit">Logar</button>
        </form>
      </main>
    </S.Container>
  );
}
