import React from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "../contexts/LoginContext";

export default function PrivateRoute({ children }) {
  const { usuario } = useLogin();

  // Se não estiver logado, redireciona para login
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  // Se estiver logado, renderiza o componente filho
  return children;
}
