import React, { useEffect, useState } from "react";
import SidebarFilters from "../components/SidebarFilters";
import PropertyCard from "../components/PropertyCard";
import api from "../services/api";
import imagemCasa from "../assets/imagemcasa.png";

export default function Imoveis() {
  const [filters, setFilters] = useState({
    tipoNegocio: "alugar",
    localizacao: "",
    tipoImovel: "casa",
    precoMin: "",
    precoMax: "",
    quartos: "",
    banheiros: "",
    garagens: "",
  });
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    api
      .get("/imoveis")
      .then((res) => setImoveis(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtrarImoveis = () => {
    return imoveis.filter((imovel) => {
      if (
        filters.tipoImovel &&
        imovel.titulo.toLowerCase().indexOf(filters.tipoImovel) === -1
      )
        return false;
      if (
        filters.localizacao &&
        !imovel.endereco
          .toLowerCase()
          .includes(filters.localizacao.toLowerCase())
      )
        return false;
      if (
        filters.precoMin &&
        Number(imovel.preco.replace(/\D/g, "")) < Number(filters.precoMin)
      )
        return false;
      if (
        filters.precoMax &&
        Number(imovel.preco.replace(/\D/g, "")) > Number(filters.precoMax)
      )
        return false;
      if (filters.quartos && imovel.quartos !== filters.quartos) return false;
      if (filters.banheiros && imovel.banheiros !== filters.banheiros)
        return false;
      if (filters.garagens && imovel.garagens !== filters.garagens)
        return false;
      return true;
    });
  };

  const imoveisFiltrados = filtrarImoveis();

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-[320px_1fr] gap-6">
          <aside className="w-full md:w-80 mb-6 md:mb-0">
            <SidebarFilters
              filters={filters}
              setFilters={setFilters}
              onSearch={() => {}}
            />
          </aside>
          <main className="flex-1">
            <div className="mb-6">
              <span className="text-xs text-gray-400">
                Ceará &gt; Fortaleza
              </span>
              <h2 className="text-orange-600 font-semibold text-lg mt-1 mb-4">
                {imoveisFiltrados.length} Casas para alugar em Fortaleza - CE
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {imoveisFiltrados.length === 0 && (
                <div>Nenhum imóvel encontrado.</div>
              )}
              {imoveisFiltrados.map((imovel) => (
                <PropertyCard
                  key={imovel.id}
                  image={imovel.imagem}
                  address={imovel.endereco}
                  neighborhood={imovel.bairro}
                  city={`${imovel.cidade} - ${imovel.uf}`}
                  description={`${imovel.titulo}\n${imovel.descricao}`}
                  area={imovel.area}
                  bedrooms={imovel.quartos}
                  garages={imovel.garagens}
                  price={imovel.preco}
                  onContact={() => alert("Contato!")}
                  isFavorite={false}
                  onFavorite={() => alert("Favorito!")}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
