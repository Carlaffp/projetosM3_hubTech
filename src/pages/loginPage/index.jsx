import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
import { Link } from "react-router-dom";
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledLink } from "../../styles/buttons";
import { StyledContainer } from "../../styles/grid";

export const LoginPage = ({ setUser }) => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <StyledTitleOne fontSize="sm">Login</StyledTitleOne>
        <LoginForm setUser={setUser} />
        <StyledParagraph fontSize="sm" fontWeight="lg">
          Ainda não possui uma conta?
        </StyledParagraph>
        <StyledLink
          to="/register"
          fontWeight="md"
          buttonSize="lg"
          buttonStyle="disabled"
        >
          Cadastre-se
        </StyledLink>
      </StyledContainer>
    </div>
  );
};
