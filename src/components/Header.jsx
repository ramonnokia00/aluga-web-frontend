import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b">
      <div className="flex items-center gap-2">
        <span className="bg-primary text-white px-2 py-1 rounded font-bold">🏠</span>
        <span className="font-inter font-bold text-primary">Aluga Web</span>
      </div>
      <button className="border border-primary text-primary px-4 py-1 rounded hover:bg-primary hover:text-white transition">
        Entrar
      </button>
    </header>
  );
}

