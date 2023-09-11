import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const loadTechs = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTechs(data.techs);
        } catch (error) {
          console.log(error);
        }
      }
    };
    loadTechs();
  }, []);

  const creatNewTech = async formData => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechs(techs => [...techs, data]);
      toast.success("Tecnologia cadastrada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("O nome desta tecnologia já esta cadastrada");
    }
  };

  const deleteTech = async id => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs(techs => techs.filter(tech => tech.id !== id));
      toast.success("Tecnologia deletada com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const updateTechs = async (formData, id) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.put(`/users/techs/${id}`, formData, {
        headers: {
          Authorization: `Baerer ${token}`,
        },
      });
      const newListTech = techs.map(tech => {
        if (tech.id === data.id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechs(newListTech);
      toast.success("Tecnologia atualizada!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ techs, creatNewTech, setTechs, deleteTech, updateTechs }}
    >
      {children}
    </TechContext.Provider>
  );
};
