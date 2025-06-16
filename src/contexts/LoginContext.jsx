import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const user = localStorage.getItem("usuario");
    return user ? JSON.parse(user) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (email, senha) => {
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/login", {
        usuario_email: email,
        usuario_senha: senha,
      });
      localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
      setUsuario(res.data.usuario);
      setLoading(false);
      return true;
    } catch (err) {
      setError("Email ou senha inválidos");
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("usuario");
    if (savedUser) {
      setUsuario(JSON.parse(savedUser));
    }
  }, []);

  return (
    <LoginContext.Provider value={{ usuario, login, logout, loading, error }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
