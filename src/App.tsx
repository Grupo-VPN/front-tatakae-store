import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
