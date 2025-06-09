import React from "react";

export default function SearchBar() {
  return (
    <form className="flex items-center border-2 border-primary rounded-full px-4 py-2 w-full max-w-md bg-white">
      <span className="text-primary mr-2">📍</span>
      <input
        type="text"
        placeholder="Digite a cidade ou bairro"
        className="flex-1 outline-none font-inter"
      />
      <button
        type="submit"
        className="ml-2 bg-primary text-white px-6 py-1 rounded-full font-medium hover:bg-primary-70 transition"
      >
        Buscar
      </button>
    </form>
  );
}