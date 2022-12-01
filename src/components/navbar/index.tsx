import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../../hooks/auth";
import Tatakae_Icon from "../tatakae_icon";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function NavScroll() {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <S.Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/Home">
            <Tatakae_Icon width={"250"} height={"25"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/*               <Nav.Link href="/Home">Produtos</Nav.Link>
              <Nav.Link href="/Carrinho">Carrinho</Nav.Link> */}
              <Nav.Link
                href="/"
                className="deslogar"
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
              >
                Deslogar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </S.Container>
  );
}
