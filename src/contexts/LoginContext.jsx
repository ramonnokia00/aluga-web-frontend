import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(() => {
    const user = localStorage.getItem("usuario");
    if (!user || user === "undefined" || user === "null") return null;
    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
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
      if (
        res.data &&
        res.data.tipo === "success" &&
        res.data.usuario &&
        res.data.token
      ) {
        localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
        localStorage.setItem("token", res.data.token);
        setUsuario(res.data.usuario);
        setLoading(false);
        return true;
      } else {
        setError(res.data.mensagem || "Email ou senha inválidos");
        setLoading(false);
        return false;
      }
    } catch (err) {
      setError("Email ou senha inválidos");
      setLoading(false);
      return false;
    }
  };

  // Função para cadastro de usuário
  const register = async (dados) => {
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/usuarios", dados, {
        headers:
          dados instanceof FormData
            ? { "Content-Type": "multipart/form-data" }
            : {},
      });
      if (
        res.data &&
        res.data.tipo === "error" &&
        res.data.mensagem &&
        res.data.mensagem.includes("e-mail já cadastrado")
      ) {
        setError("E-mail já cadastrado. Faça login ou recupere sua senha.");
        setLoading(false);
        return { sucesso: false, erro: "E-mail já cadastrado." };
      }
      if (res.data && res.data.usuario && res.data.token) {
        localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
        localStorage.setItem("token", res.data.token);
        setUsuario(res.data.usuario);
        setLoading(false);
        return { sucesso: true };
      } else {
        setError(res.data.mensagem || "Erro ao cadastrar.");
        setLoading(false);
        return { sucesso: false, erro: res.data.mensagem };
      }
    } catch (err) {
      setError("Erro ao cadastrar usuário");
      setLoading(false);
      return { sucesso: false };
    }
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("usuario");
    if (!savedUser || savedUser === "undefined" || savedUser === "null") {
      setUsuario(null);
      return;
    }
    try {
      setUsuario(JSON.parse(savedUser));
    } catch {
      setUsuario(null);
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{ usuario, login, logout, loading, error, register, setUsuario }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);
