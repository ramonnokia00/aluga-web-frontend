import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { useLogin } from "../contexts/LoginContext";
import iconeboneco from "../assets/iconeentrar.png";
import icone from "../assets/icone.png";
import favoritos from "../assets/favicon.png";
import x from "../assets/x.svg";

export default function Header() {
  const { usuario, logout } = useLogin();
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (rota) => {
    setMenuAberto(false);
    if (rota === "sair") {
      logout();
    } else if (rota) {
      navigate(rota);
    }
  };

  function mostrarOverlay() {
    let overlayElement = document.querySelector('#overlay');
    let gavetaElement = document.querySelector("#gaveta");

    if (overlayElement.classList.contains('invisible')) {
      overlayElement.classList.remove("invisible", "opacity-0");
      gavetaElement.classList.remove("-right-full");
      gavetaElement.classList.add("right-0");
    } else {
      overlayElement.classList.add('invisible', 'opacity-0');
      gavetaElement.classList.add("-right-full");
      gavetaElement.classList.remove("right-0");
    }
  }

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-cinzaborda-15 relative z-50">
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
          <div className="items-center flex gap-3 mr-5 xl:invisible">
            <img src={favoritos} alt="" />
            <p className="text-gray font-semibold cursor-pointer hover:underline">
              <NavLink to={"/favoritos"}>Favoritos</NavLink>
            </p>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[#DF4300] font-bold">
              {usuario.nome || usuario.usuario_nome}
            </span>
          </div>
          <img
            src={
              usuario.usuario_imagem
                ? usuario.usuario_imagem.startsWith("http")
                  ? usuario.usuario_imagem
                  : `http://localhost:8000${usuario.usuario_imagem}`
                : usuario.foto || usuario.foto_url || "/user-default.png"
            }
            alt="Foto"
            className="w-8 h-8 rounded-full object-cover border cursor-pointer"
            onClick={mostrarOverlay}
          />
          {/* Overlay e Gaveta */}
          <div
            id="overlay"
            onClick={mostrarOverlay}
            className="w-full h-full bg-black/70 fixed top-0 left-0 duration-200 opacity-0 invisible flex justify-end z-50"
          >
            <div
              id="gaveta"
              onClick={(e) => e.stopPropagation()}
              className="min-w-[350px] h-screen bg-white p-4 duration-200 -right-full fixed top-0"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      usuario.usuario_imagem
                        ? usuario.usuario_imagem.startsWith("http")
                          ? usuario.usuario_imagem
                          : `http://localhost:8000${usuario.usuario_imagem}`
                        : usuario.foto || usuario.foto_url || "/user-default.png"
                    }
                    alt="Foto"
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <span className="text-[#DF4300] font-bold text-lg">
                    {usuario.usuario_nome || usuario.nome}
                  </span>
                </div>
                <img
                  src={x}
                  alt="Fechar"
                  className="w-6 h-6 cursor-pointer"
                  onClick={mostrarOverlay}
                />
              </div>

              <button
                onClick={() => handleMenuClick("/meu-perfil")}
                className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium w-full"
              >
                Meu Perfil
              </button>
              <button
                onClick={() => handleMenuClick("/favoritos")}
                className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium w-full"
              >
                Favoritos
              </button>
              <button
                onClick={() => handleMenuClick("/cadastrar-imovel")}
                className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium w-full"
              >
                Criar Imóveis
              </button>
              <button
                onClick={() => handleMenuClick("/configuracoes")}
                className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium w-full"
              >
                Configurações de Conta
              </button>
              <button
                onClick={() => handleMenuClick("sair")}
                className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium text-[#DF4300] mt-8 w-full"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
