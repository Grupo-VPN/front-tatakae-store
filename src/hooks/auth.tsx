import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";

import { api } from "../service/api";

import { setCookie, parseCookies } from "nookies";

interface IUser {
  email: string;
  senha: string;
  id: string;
  token: string;
}

interface LoginProps {
  email: string;
  senha: string;
}

interface IMonitoramento extends IUser {
  usuario: number;
  tela: number;
}

interface AuthContextData {
  signOut: () => void;
  isAuthenticated: boolean;
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
  signIn: (user: LoginProps) => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  Cookies.remove("tatakae.token");
  Cookies.remove("tatakae.user_id");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const isAuthenticated = !!user;

    const { "tatakae.token": token, "tatakae.id": id } = parseCookies();

    if (token) {
      api
        .get("/monitorar", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }: any) => {
          setUser(data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, []);

  async function signIn({ email, senha }: LoginProps) {
    try {
      const { data } = await api.post<IUser>("/login", {
        email: email,
        senha: senha,
      });

      setCookie(null, "tatakae.token", data.token as string, {
        maxAge: 60 * 60 * 2400,
        path: "/",
      });

      setCookie(null, "tatakae.id", String(data.id), {
        maxAge: 60 * 60 * 2400,
        path: "/",
      });
      setUser(data);

      navigate("/Home", {
        state: {
          id: String(data.id),
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        setUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
