import { parseCookies } from "nookies";
import { useCallback, useContext } from "react";
import { AuthContext } from "../../hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
interface InputsProps {
  idTela: string;
  IdProduto: number;
  idUsuario: string;
}
export default function TelaPrincipal() {
  const cookies = parseCookies();
  const { signIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const iniciarMonitoramento = useCallback(async (data: InputsProps) => {
    await api
      .post<InputsProps>(
        `/monitorar`,
        {
          usuarioId: Number(user?.id),
          telaId: 2,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies["tatakae.token"]}`,
          },
        }
      )
      .then(() => {
        navigate("/Home");
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
    <form onSubmit={handleSubmit(inicioMonitorar)}>
      <button type="submit">Iniciar a busca por produtos</button>
    </form>
  );
}
