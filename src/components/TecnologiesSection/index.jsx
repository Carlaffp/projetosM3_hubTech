import { useContext, useState } from "react";
import { StyledButton } from "../../styles/buttons";
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledTecnologiesSection } from "./TecnologiesSection";

import { TechContext } from "../../providers/TechContext";

import { TechCard } from "./TechCard";
import { StyledContainerList } from "../../styles/grid";
import { ModalUpdatetech } from "../ModalUpdateTech";
import { ModalCreatTech } from "../ModalCreatTech";

export const TecnologiesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [tech, setTech] = useState();

  const { techs } = useContext(TechContext);

  return (
    <StyledTecnologiesSection>
      <div className="container">
        <StyledTitleOne>Tecnologias</StyledTitleOne>
        <StyledButton
          buttonStyle="black"
          buttonSize="sm"
          onClick={() => setIsOpen(true)}
        >
          +
        </StyledButton>
        {isOpen ? (
          <ModalCreatTech setIsOpen={setIsOpen}></ModalCreatTech>
        ) : null}
      </div>
      <StyledContainerList>
        {techs.length <= 0 ? (
          <StyledParagraph fontWeight="lg">
            Você ainda não tem tecnologias cadastradas
          </StyledParagraph>
        ) : (
          <>
            {techs.map(tech => (
              <TechCard
                key={tech.id}
                tech={tech}
                setTech={setTech}
                setIsOpenUpdateModal={setIsOpenUpdateModal}
              />
            ))}
          </>
        )}
      </StyledContainerList>
      {isOpenUpdateModal ? (
        <ModalUpdatetech
          setIsOpenUpdateModal={setIsOpenUpdateModal}
          tech={tech}
        ></ModalUpdatetech>
      ) : null}
    </StyledTecnologiesSection>
  );
};
