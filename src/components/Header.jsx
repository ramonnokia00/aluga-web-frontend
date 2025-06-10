import React from "react";

import iconeboneco from "../assets/iconeentrar.png"
import icone from "../assets/icone.png"

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-cinzaborda-15">
      <div className="flex items-center gap-2">
        <div className="bg-laranja">
          <img src={icone} alt="" className="p-[6px]" />
        </div>
        <span className="font-bold text-laranja text-2xl">Aluga Web</span>
      </div>
      <button className="bg-laranja-20 cursor-pointer items-center flex justify-center gap-2 w-[147px] h-[50px] rounded duration-200 hover:bg-laranja-70 ">
        <img src={iconeboneco} alt="" />
        <a href="" className="text-laranja font-semibold">Entrar</a>
      </button>
    </header>
  );
}

