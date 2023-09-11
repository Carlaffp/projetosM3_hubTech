import { useForm } from "react-hook-form";
import { StyledSelect } from "../../styles/Select";
import { StyledLaabel } from "../../styles/inputs";
import { Input } from "../InputForm";
import { CreatTechSchema } from "../Schemas/CreatTechSchema/CreatTechSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledForm } from "../../styles/Form";
import { StyledParagraph, StyledTitleOne } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import { useContext, useEffect, useRef } from "react";
import { TechContext } from "../../providers/TechContext";
import {
  StyledCloseButton,
  StyledDivModal,
  StyledModalContainer,
  StyledModalHeader,
  StyledModalmain,
} from "./ModalStyled";

export const ModalCreatTech = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreatTechSchema),
  });
  const { creatNewTech } = useContext(TechContext);

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

  const submit = async formData => {
    await creatNewTech(formData);
    setIsOpen(false);
    reset();
  };

  return (
    <StyledModalContainer role="dialog">
      <StyledDivModal ref={modalRef}>
        <StyledModalHeader>
          <StyledTitleOne fontSize="sm">Cadastrar tecnologia</StyledTitleOne>
          <StyledCloseButton onClick={() => setIsOpen(false)}>
            X
          </StyledCloseButton>
        </StyledModalHeader>
        <StyledModalmain>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <Input
              label="Nome"
              placeholder="Typescript"
              type="text"
              {...register("title")}
              error={errors.title}
            />
            <StyledLaabel>Selecionar status</StyledLaabel>
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
            <StyledButton buttonStyle="primary" buttonSize="lg" type="submit">
              Cadastrar Tecnologia
            </StyledButton>
          </StyledForm>
        </StyledModalmain>
      </StyledDivModal>
    </StyledModalContainer>
  );
};
