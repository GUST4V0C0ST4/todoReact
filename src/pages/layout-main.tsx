import Container from "../components/container";
import { NavLink } from "react-router";
import Text from "../components/text";

export default function LayoutMain() {
  return (
    <>
      <Container as="header">Ola Mundo - HEADER</Container>
      <main>CONTEUDO PRINCIPAL</main>
      <footer>
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/componentes">
            <Text variant="body-sm-bold" className="text-gray-300">
              Componentes
            </Text>
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
