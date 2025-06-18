import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarFilters from "../components/SidebarFilters";
import PropertyCard from "../components/PropertyCard";
import api from "../services/api";
import imagemCasa from "../assets/imagemcasa.png";

export default function Imoveis() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const estadoSigla = params.get("estado");
  const nomeEstado = params.get("nomeEstado");

  const [filters, setFilters] = useState({
    tipoNegocio: "",
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
      .then((res) => {
        console.log("Imóveis recebidos:", res.data);
        setImoveis(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filtrarImoveis = () => {
    return imoveis.filter((imovel) => {
      // Filtro por tipo de negócio (comprar/alugar)
      if (
        filters.tipoNegocio &&
        imovel.imovel_modalidade &&
        imovel.imovel_modalidade.toLowerCase() !== filters.tipoNegocio.toLowerCase()
      )
        return false;

      // Filtro por tipo de imóvel
      if (
        filters.tipoImovel &&
        imovel.imovel_tipo &&
        !imovel.imovel_tipo.toLowerCase().includes(filters.tipoImovel.toLowerCase())
      )
        return false;

      // Filtro por localização (cidade, bairro, logradouro ou estado)
      if (
        filters.localizacao &&
        ![
          imovel.imovel_cidade,
          imovel.imovel_bairro,
          imovel.imovel_logradouro,
          imovel.imovel_estado,
        ].some((campo) =>
          campo && campo.toLowerCase().includes(filters.localizacao.toLowerCase())
        )
      )
        return false;

      // Filtro por preço mínimo
      if (filters.precoMin && Number(imovel.imovel_valor) < Number(filters.precoMin))
        return false;
      // Filtro por preço máximo
      if (filters.precoMax && Number(imovel.imovel_valor) > Number(filters.precoMax))
        return false;

      // Filtro por quartos
      if (filters.quartos && Number(imovel.imovel_quartos) !== Number(filters.quartos))
        return false;
      // Filtro por banheiros
      if (
        filters.banheiros &&
        Number(imovel.imovel_banheiros) !== Number(filters.banheiros)
      )
        return false;
      // Filtro por garagens
      if (filters.garagens && Number(imovel.imovel_garagens) !== Number(filters.garagens))
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
                {nomeEstado ? nomeEstado : "Localização"}
              </span>
              <h2 className="text-orange-600 font-semibold text-lg mt-1 mb-4">
                {imoveisFiltrados.length} Casas para alugar em{" "}
                {nomeEstado ? nomeEstado : "Brasil"}
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {imoveisFiltrados.length === 0 && (
                <div>Nenhum imóvel encontrado.</div>
              )}

              {imoveisFiltrados.map((imovel) => (
                <PropertyCard
                  key={imovel.imovel_id}
                  image={imovel.imovel_imagem || imagemCasa}
                  address={`${imovel.imovel_logradouro}, ${imovel.imovel_numero}`}
                  neighborhood={imovel.imovel_bairro}
                  city={`${imovel.imovel_cidade} - ${imovel.imovel_estado}`}
                  description={`${imovel.imovel_tipo}\n${imovel.imovel_descricao}`}
                  area={imovel.imovel_area}
                  bedrooms={imovel.imovel_quartos}
                  garages={imovel.imovel_garagens}
                  price={imovel.imovel_valor}
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
