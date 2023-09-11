import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const currentPath = window.location.pathname;

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
        navigate(currentPath);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      } finally {
        setLoading(false);
      }
    }
  };

  const createUser = async formData => {
    try {
      const response = await api.post("/users", formData);
      navigate("/");
      toast.success("Registro realizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Email.já cadastrado");
    }
  };

  const loginUser = async (formData, setLoading) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };
  return (
    <UserContext.Provider
      value={{ user, setUser, createUser, loginUser, logout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
