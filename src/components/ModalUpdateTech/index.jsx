import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  StyledCloseButton,
  StyledDivModal,
  StyledModalContainer,
  StyledModalHeader,
  StyledModalmain,
} from "../ModalCreatTech/ModalStyled";
import { StyledForm } from "../../styles/Form";
import { StyledLaabel } from "../../styles/inputs";
import { StyledSelect } from "../../styles/Select";
import { TechContext } from "../../providers/TechContext";
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledButtonUpdateModal } from "../../styles/buttons";
import { StyledDivButtons, StyledTitleTech } from "./ModalUpdateStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateTechSchema } from "../Schemas/UpdateTechSchema/UpdateTechSchema";

export const ModalUpdatetech = ({ setIsOpenUpdateModal, tech }) => {
  const { register, handleSubmit, reset, formState:{errors} } = useForm({resolver:zodResolver(UpdateTechSchema)});
  const { deleteTech, updateTechs } = useContext(TechContext);

  const modalRef = useRef(null);
  
  useEffect(() => {
    const handleOutClick = event => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);
  const deleteAndCloseModal = () => {
    deleteTech(tech.id);
    setIsOpenUpdateModal(false);
  };

  const submit = async formData => {
    await updateTechs(formData, tech.id);
    setIsOpenUpdateModal(false);
    reset();
  };
  return (
    <StyledModalContainer role="dialog">
      <StyledDivModal ref={modalRef}>
        <StyledModalHeader>
          <StyledTitleOne fontSize="sm">Tecnologia Detalhes</StyledTitleOne>
          <StyledCloseButton onClick={() => setIsOpenUpdateModal(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalmain>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <StyledLaabel>Nome</StyledLaabel>
            <StyledTitleTech>{tech.title}</StyledTitleTech>
            <StyledLaabel>Status</StyledLaabel>
            <StyledSelect {...register("status")}>
              <option hidden value="">
                selecione status
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyledSelect>
            {errors.status ? (
              <StyledParagraph fontColor="red">
                {errors.status.message}
              </StyledParagraph>
            ) : null}
            <StyledDivButtons>
              <StyledButtonUpdateModal
                buttonSize="lg"
                buttonStyle="negative"
                type="submit"
              >
                Salvar alterações
              </StyledButtonUpdateModal>
              <StyledButtonUpdateModal
                buttonSize="md"
                buttonStyle="disabled"
                type="button"
                onClick={deleteAndCloseModal}
              >
                Excluir
              </StyledButtonUpdateModal>
            </StyledDivButtons>
          </StyledForm>
        </StyledModalmain>
      </StyledDivModal>
    </StyledModalContainer>
  );
};
