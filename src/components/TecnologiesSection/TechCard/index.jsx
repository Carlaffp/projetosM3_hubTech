import { useContext } from "react";
import { StyledParagraph, StyledTitleTwo } from "../../../styles/typography";
import { StyledTechCard } from "./TechCard";
import { TechContext } from "../../../providers/TechContext";

export const TechCard = ({ tech, setIsOpenUpdateModal, setTech }) => {
  return (
    <StyledTechCard onClick={() => (setIsOpenUpdateModal(true), setTech(tech))}>
      <StyledTitleTwo fontSize="sm">{tech.title}</StyledTitleTwo>
      <StyledParagraph fontWeight="sm">{tech.status}</StyledParagraph>
    </StyledTechCard>
  );
};
