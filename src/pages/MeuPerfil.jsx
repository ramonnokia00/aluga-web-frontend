import React from "react";
import { useLogin } from "../contexts/LoginContext";

export default function MeuPerfil() {
  const { usuario } = useLogin();

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-[#DF4300]">Meu Perfil</h2>
      <div className="flex items-center gap-6 mb-6">
        <img
          src={
            usuario.usuario_imagem
              ? usuario.usuario_imagem.startsWith("http")
                ? usuario.usuario_imagem
                : `http://localhost:8000${usuario.usuario_imagem}`
              : usuario.foto || usuario.foto_url || "/user-default.png"
          }
          alt="Foto"
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <div className="font-bold text-lg text-[#DF4300]">
            {usuario.usuario_nome || usuario.nome}
          </div>
          <div className="text-gray-500">
            {usuario.Usuario_email || usuario.usuario_email}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-gray-500 text-sm">Telefone</span>
          <div className="font-semibold">{usuario.usuario_telefone}</div>
        </div>
        <div>
          <span className="text-gray-500 text-sm">Nascimento</span>
          <div className="font-semibold">{usuario.usuario_nascimento}</div>
        </div>
      </div>
    </div>
  );
}
