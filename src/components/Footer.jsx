import React from "react";
import icone from "../assets/icone-footer.png"

export default function Footer() {
  return (
    <footer className="bg-[#DF4300] flex justify-between p-4 items-center">
      <div className="flex gap-3">
      <div className="bg-white rounded justify-center flex">
        <img src={icone} alt="" className="p-1" />

      </div>
      <p className="text-white text-2xl font-bold">Aluga web</p>

      </div>
      <p className="text-white font-bold text-xl">Todos os direitos reservados</p>

    </footer>
  );
}