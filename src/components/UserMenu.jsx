import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../contexts/LoginContext";
import { FaUser, FaHeart, FaCog, FaSignOutAlt, FaHome } from "react-icons/fa";

export default function UserMenu({ onClose }) {
  const { usuario, logout } = useLogin();

  return (
    <aside className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col p-8 transition-transform duration-300">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={
            usuario.usuario_imagem
              ? usuario.usuario_imagem.startsWith("http")
                ? usuario.usuario_imagem
                : `http://localhost:8000${usuario.usuario_imagem}`
              : usuario.foto || usuario.foto_url || "/user-default.png"
          }
          alt="Foto"
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <div className="font-bold text-[#DF4300] text-lg">
            {usuario.usuario_nome || usuario.nome}
          </div>
          <div className="text-xs text-gray-500">
            {usuario.Usuario_email || usuario.usuario_email}
          </div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-4">
        <Link
          to="/meu-perfil"
          className="hover:text-[#DF4300]"
          onClick={onClose}
        >
          <FaUser className="inline mr-2" />
          Meu Perfil
        </Link>
        <Link
          to="/favoritos"
          className="hover:text-[#DF4300]"
          onClick={onClose}
        >
          <FaHeart className="inline mr-2" />
          Favoritos
        </Link>
        <Link
          to="/cadastrar-imovel"
          className="hover:text-[#DF4300]"
          onClick={onClose}
        >
          <FaHome className="inline mr-2" />
          Criar Imóveis
        </Link>
        <Link
          to="/configuracoes"
          className="hover:text-[#DF4300]"
          onClick={onClose}
        >
          <FaCog className="inline mr-2" />
          Configurações de Conta
        </Link>
      </nav>
      <button
        onClick={logout}
        className="mt-8 text-[#DF4300] font-bold hover:underline text-left"
      >
        Sair
      </button>
    </aside>
  );
}
