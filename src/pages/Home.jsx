
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import imgPessoa from "../assets/pessoa.png"; 

export default function Home() {
  return (
    <div className="flex w-full">
      <main className="flex flex-1 items-center justify-between px-12 py-8 bg-white">
        <div className="">
          <h1 className="text-3xl font-bold mb-4">Onde você quer morar</h1>
          <SearchBar />
        </div>
        <img
          src={imgPessoa}
          alt="Pessoa"
          className=""
        />
      </main>
    </div>
  );
}
