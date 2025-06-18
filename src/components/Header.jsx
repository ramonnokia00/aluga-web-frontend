import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { useLogin } from "../contexts/LoginContext";
import iconeboneco from "../assets/iconeentrar.png";
import icone from "../assets/icone.png";

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
        <>
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setMenuAberto(true)}
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setMenuAberto(true)
            }
          >
            <span className="text-[#DF4300] font-bold text-base">
              {usuario.usuario_nome || usuario.nome}
            </span>
            <img
              src={
                usuario.usuario_imagem
                  ? usuario.usuario_imagem.startsWith("http")
                    ? usuario.usuario_imagem
                    : `http://localhost:8000${usuario.usuario_imagem}`
                  : usuario.foto || usuario.foto_url || "/user-default.png"
              }
              alt="Foto"
              className="w-10 h-10 rounded-full object-cover border"
            />
          </div>
          {/* Modal escurecido */}
          {menuAberto && (
            <>
              {/* Backdrop transparente para fechar o menu ao clicar fora */}
              <div
                className="fixed inset-0 z-40"
                style={{ background: "transparent" }}
                onClick={() => setMenuAberto(false)}
              ></div>
              <nav
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col pt-8 px-6 animate-slideInRight"
                style={{ transition: "transform 0.3s", minHeight: "100vh" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src={
                      usuario.usuario_imagem
                        ? usuario.usuario_imagem.startsWith("http")
                          ? usuario.usuario_imagem
                          : `http://localhost:8000${usuario.usuario_imagem}`
                        : usuario.foto ||
                          usuario.foto_url ||
                          "/user-default.png"
                    }
                    alt="Foto"
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <span className="text-[#DF4300] font-bold text-lg">
                    {usuario.usuario_nome || usuario.nome}
                  </span>
                </div>
                <button
                  onClick={() => handleMenuClick("/meu-perfil")}
                  className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium"
                >
                  Meu Perfil
                </button>
                <button
                  onClick={() => handleMenuClick("/favoritos")}
                  className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium"
                >
                  Favoritos
                </button>
                <button
                  onClick={() => handleMenuClick("/cadastrar-imovel")}
                  className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium"
                >
                  Criar Imóveis
                </button>
                <button
                  onClick={() => handleMenuClick("/configuracoes")}
                  className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium"
                >
                  Configurações de Conta
                </button>
                <button
                  onClick={() => handleMenuClick("sair")}
                  className="text-left py-3 px-2 hover:bg-[#FFF3ED] rounded font-medium text-[#DF4300] mt-8"
                >
                  Sair
                </button>
              </nav>
            </>
          )}
        </>
      )}
    </header>
  );
}

// Tailwind: adicionar animação
// No seu index.css ou global.css:
// .animate-slideIn { animation: slideIn 0.3s cubic-bezier(.4,0,.2,1) both; }
// @keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }
