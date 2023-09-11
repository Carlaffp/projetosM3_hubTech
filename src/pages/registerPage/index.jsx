import { CreateUserForm } from "../../components/CreateUserForm";
import { Header } from "../../components/Header";
import { StyledLink } from "../../styles/buttons";
import { StyledContainer } from "../../styles/grid";
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";

export const RegisterPage = ({ setUser }) => {
  return (
    <div>
      <Header>
        <StyledLink fontWeight="lg" buttonSize="md" buttonStyle="black" to="/">
          Voltar
        </StyledLink>
      </Header>
      <StyledContainer>
        <StyledTitleOne fontSize="sm">Crie sua conta</StyledTitleOne>
        <StyledParagraph fontSize="sm" fontWeight="sm">
          Rápido e grátis, vamos nessa
        </StyledParagraph>
        <CreateUserForm setUser={setUser} />
      </StyledContainer>
    </div>
  );
};
