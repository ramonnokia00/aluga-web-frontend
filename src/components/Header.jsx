import React from "react";
import { NavLink, Link } from "react-router-dom";

import { useLogin } from "../contexts/LoginContext";
import iconeboneco from "../assets/iconeentrar.png";
import icone from "../assets/icone.png";
import favoritos from "../assets/favicon.png";
import Favoritos from "../pages/Favoritos";
import x from "../assets/x.svg"


export default function Header() {
  const { usuario, logout } = useLogin();

  function mostrarOverlay() {
    let overlayElement = document.querySelector('#overlay');
    let gavetaElement = document.querySelector("#gaveta");

    if (overlayElement.classList.contains('invisible')){
        overlayElement.classList.remove("invisible", "opacity-0");
        gavetaElement.classList.remove("-right-full");
        gavetaElement.classList.add("right-0");
    }
    else {
        overlayElement.classList.add('invisible' , 'opacity-0');
        gavetaElement.classList.add("-right-full");
        gavetaElement.classList.remove("right-0");
    }
}



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


          <div className="items-center flex gap-3 mr-5">
            <img src={favoritos} alt="" />
            <p className="text-gray font-semibold cursor-pointer hover:underline"><NavLink to={"/favoritos"}>Favoritos</NavLink></p>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-[#DF4300] font-bold">
              {usuario.nome || usuario.usuario_nome}
            </span>
            <button
              onClick={logout}
              className="text-sm text-gray-500 hover:underline cursor-pointer"
            >
              Sair
            </button>
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
            className="w-8 h-8 rounded-full object-cover border"
          />

            src={usuario.foto || usuario.foto_url || "/user-default.png"}
            alt="Foto"
            className="w-8 h-8 rounded-full object-cover border cursor-pointer"
            onClick={mostrarOverlay}
          />
           <div onclick="mostrarOverlay()" id="overlay"
                class="w-full h-full bg-black/70 absolute top-0 left-0 duration-200 opacity-0 invisible">
            </div>
            <div id="gaveta" className="min-w-[350px] h-screen bg-white p-4 absolute top-0 -right-full duration-200 invisible">
                <h3 onclick="mostrarOverlay()" className="flex justify-between items-center text-2xl ">Cadastro
                    <img src={x} alt=""  className="w-[40px] h-[40px] bg-laranja fill-white p-2 cursor-pointer rounded-full hover:bg-pink-700 duration-200"
                    onClick={mostrarOverlay}/>
                </h3>
                </div>
        </div>
      )}
    </header>
  );
}
