import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../InputForm";

import { RegisterSchema } from "../Schemas/registerSchema/registerSchema";

import { StyledForm } from "../../styles/Form";
import { StyledButton } from "../../styles/buttons";
import { StyledSelect } from "../../styles/Select";
import { StyledLaabel } from "../../styles/inputs";
import { StyledParagraph } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const { createUser } = useContext(UserContext);

  const submit = async formData => {
    await createUser(formData);
    reset();
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome"
          placeholder="digite aqui seu nome"
          type="text"
          {...register("name")}
          error={errors.name}
        />

        <Input
          label="email"
          placeholder="Digite aqui seu email"
          type="email"
          {...register("email")}
          error={errors.email}
        />

        <Input
          label="Senha"
          placeholder="Digite aqui sua senha"
          type="password"
          {...register("password")}
          error={errors.password}
        />

        <Input
          label="Confirmar Senha"
          placeholder=" Confirmar senha"
          type="password"
          {...register("confirm")}
          error={errors.confirm}
        />

        <Input
          label="Bio"
          placeholder="Fale sobre você"
          type="text"
          {...register("bio")}
          error={errors.bio}
        />

        <Input
          label="Contato"
          placeholder="Opção de contato"
          type="text"
          {...register("contact")}
          error={errors.contact}
        />

        <StyledLaabel>Selecionar módulo</StyledLaabel>
        <StyledSelect {...register("course_module")}>
          <option hidden value="">
            selecione módulo
          </option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo
          </option>
        </StyledSelect>
        {errors.course_module ? (
          <StyledParagraph fontColor="red">
            {errors.course_module.message}
          </StyledParagraph>
        ) : null}

        <StyledButton
          fontWeight="md"
          buttonSize="lg"
          buttonStyle="negative"
          type="submit"
        >
          Cadastrar
        </StyledButton>
      </StyledForm>
    </div>
  );
};
