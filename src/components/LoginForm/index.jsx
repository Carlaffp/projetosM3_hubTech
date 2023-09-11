import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";

import { Input } from "../InputForm";
import { LoginSchema } from "../Schemas/LoginSchema/LoginSchema";

import { StyledButton } from "../../styles/buttons";
import { StyledForm } from "../../styles/Form";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const { loginUser } = useContext(UserContext);

  const submit = async formData => {
    await loginUser(formData, setLoading);
    reset();
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
          error={errors.email}
          disabled={loading}
        />

        <Input
          label="Senha"
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password}
          disabled={loading}
        >
          <button
            className="eyeButton"
            type="button"
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} style={{ color: "white" }} />
            ) : (
              <AiOutlineEye size={20} style={{ color: "white" }} />
            )}
          </button>
        </Input>

        <StyledButton
          buttonStyle="primary"
          buttonSize="lg"
          fontWeight="md"
          type="submit"
          disabled={loading}
        >
          {loading ? "Entrando..." : "Enviar"}
        </StyledButton>
      </StyledForm>
    </div>
  );
};
