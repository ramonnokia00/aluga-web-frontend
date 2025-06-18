import React from "react";
import icone from "../assets/icone-footer.png";

export default function Footer() {
  return (
    <footer className="bg-[#DF4300] flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 p-2 md:p-3 fixed bottom-0 left-0 w-full z-40 min-h-[36px] md:min-h-[44px]">
      <div className="flex gap-2 items-center">
        <div className="bg-white rounded justify-center flex">
          <img src={icone} alt="" className="p-1 w-7 h-7 md:w-8 md:h-8" />
        </div>
        <p className="text-white text-lg md:text-xl font-bold">Aluga web</p>
      </div>
      <p className="text-white font-bold text-xs md:text-base text-center">
        Todos os direitos reservados
      </p>
    </footer>
  );
}
