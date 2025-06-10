import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import imgPessoa from "../assets/pessoa.png"; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Header />
      <main className="flex flex-1 items-center justify-between px-12 py-8 bg-white">
        <div className="flex flex-col gap-8 max-w-lg">
          <h1 className="text-2xl font-bold mb-4">Onde você quer morar</h1>
          <SearchBar />
        </div>
        <img
          src={imgPessoa}
          alt="Pessoa"
          className="max-h-[400px] object-contain"
        />
      </main>
      <Footer />
    </div>
  );
}
