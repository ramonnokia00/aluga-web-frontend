import React from "react";
import icone from "../assets/icone-footer.png";

export default function Footer() {
  return (
    <footer className="bg-[#DF4300] flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 p-4 fixed bottom-0 left-0 w-full z-50">
      <div className="flex gap-3 items-center">
        <div className="bg-white rounded justify-center flex">
          <img src={icone} alt="" className="p-1 w-8 h-8" />
        </div>
        <p className="text-white text-xl md:text-2xl font-bold">Aluga web</p>
      </div>
      <p className="text-white font-bold text-base md:text-xl text-center">
        Todos os direitos reservados
      </p>
    </footer>
  );
}
