import React from "react";
import { NavLink, Link } from "react-router-dom";

import { useLogin } from "../contexts/LoginContext";
import iconeboneco from "../assets/iconeentrar.png";
import icone from "../assets/icone.png";

export default function Header() {
  const { usuario, logout } = useLogin();

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-cinzaborda-15">
      <Link to="/" className="flex gap-3 items-center cursor-pointer">
        <div className="bg-[#DF4300] rounded justify-center flex">
          <img src={icone} alt="icone" className="p-1 w-8 h-8" />
        </div>
        <p className="text-[#DF4300] text-xl md:text-2xl font-bold">
          Aluga Web
        </p>
      </Link>
      {!usuario ? (
        <NavLink
          to="/login"
          className="bg-laranja-20 cursor-pointer flex items-center justify-center gap-2 w-[147px] h-[50px] rounded font-bold text-white"
        >
          <img src={iconeboneco} alt="icone Entrar" />
          Entrar
        </NavLink>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-[#DF4300] font-bold">
            {usuario.nome || usuario.usuario_nome}
          </span>
          <button onClick={logout} className="text-xs text-gray-500">
            Sair
          </button>
          <img
            src={usuario.foto || usuario.foto_url || "/user-default.png"}
            alt="Foto"
            className="w-8 h-8 rounded-full object-cover border"
          />
        </div>
      )}
    </header>
  );
}
