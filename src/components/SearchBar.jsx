import React from "react";
import localizar from "../assets/localizar.png"; 

import fundo from "../assets/bg-orange.png"; 
export default function SearchBar() {
  return (
    <form className="flex items-center border-2 border-[#E04300] rounded-full xl:w-[606px] h-[75px] px-4 py-2  max-w-md bg-white">
      <span className="text-primary mr-2"><img src={localizar} alt="" /></span>
      <input
        type="text"
        placeholder="Digite a cidade ou bairro"
        className="flex-1 outline-none font-inter"
      />
      
   <button
  type="submit"
  className="ml-2 bg-[#E04300] text-white w-[116px] h-[54px] rounded-full font-bold text-xl flex items-center justify-center"
>
  Buscar
</button>
    </form>
  );
}