import React from "react";
import { NavLink, Link } from "react-router-dom";

import iconeboneco from "../assets/iconeentrar.png";
import icone from "../assets/icone.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-cinzaborda-15">
      <Link to="/" className="flex gap-3 items-center cursor-pointer">
        <div className="bg-[#DF4300] rounded justify-center flex">
          <img src={icone} alt="" className="p-1 w-8 h-8" />
        </div>
        <p className="text-[#DF4300] text-xl md:text-2xl font-bold">
          Aluga Web
        </p>
      </Link>

      <NavLink
        to="/login"
        className="bg-laranja-20 cursor-pointer flex items-center justify-center gap-2 w-[147px] h-[50px] rounded duration-200 hover:bg-laranja-70 text-laranja font-semibold"
      >
        <img src={iconeboneco} alt="Ícone Entrar" />
        Entrar
      </NavLink>
    </header>
  );
}
