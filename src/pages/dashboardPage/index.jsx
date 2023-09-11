import { AboutUserSection } from "../../components/AboutUserSection";
import { Header } from "../../components/Header";
import { StyledButton } from "../../styles/buttons";
import { TecnologiesSection } from "../../components/TecnologiesSection";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
  const { logout } = useContext(UserContext);

  return (
    <div>
      <Header>
        <StyledButton
          fontWeight="lg"
          buttonSize="md"
          buttonStyle="black"
          onClick={logout}
        >
          Sair
        </StyledButton>
      </Header>
      <main>
        <AboutUserSection />
        <TecnologiesSection />
      </main>
    </div>
  );
};
