import { useContext } from "react";
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledAboutUserSection } from "./AboutUserSection";
import { UserContext } from "../../providers/UserContext";

export const AboutUserSection = () => {
  const { user } = useContext(UserContext);
  return (
    <StyledAboutUserSection>
      <div className="container">
        <StyledTitleOne fontSize="lg">Olá, {user.name}</StyledTitleOne>
        <StyledParagraph fontWeight="lg">{user.course_module}</StyledParagraph>
      </div>
    </StyledAboutUserSection>
  );
};
