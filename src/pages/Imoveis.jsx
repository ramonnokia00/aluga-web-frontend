import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarFilters from "../components/SidebarFilters";
import PropertyCard from "../components/PropertyCard";
import api from "../services/api";
import { useLogin } from "../contexts/LoginContext";
import FiltroResumo from "../components/FiltroResumo";
import imagemCasa from "../assets/imagemcasa.png";
import apartamento from "../assets/apartamento.jpg";


export default function Imoveis() {
  const { usuario } = useLogin();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const estadoSigla = params.get("estado");
  const nomeEstado = params.get("nomeEstado");

  const [filters, setFilters] = useState({
    tipoNegocio: "",
    localizacao: "",
    tipoImovel: "",
    precoMin: "",
    precoMax: "",
    quartos: "",
    banheiros: "",
    garagens: "",
    estado: estadoSigla || "",
    nomeImovel: "",
    bairro: "",
    cidade: "",
  });

  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ordem, setOrdem] = useState("relevancia");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const params = {};
    if (filters.estado) params.estado = filters.estado;
    if (filters.cidade) params.cidade = filters.cidade;
    if (filters.bairro) params.bairro = filters.bairro;
    if (filters.nomeImovel) params.nomeImovel = filters.nomeImovel;
    if (filters.tipoImovel) params.tipo = filters.tipoImovel;
    if (filters.precoMin) params.precoMin = filters.precoMin;
    if (filters.precoMax) params.precoMax = filters.precoMax;
    if (filters.quartos) params.quartos = filters.quartos;
    if (filters.banheiros) params.banheiros = filters.banheiros;
    if (filters.garagens) params.garagens = filters.garagens;

    api
      .get("/imoveis", { params })
      .then((res) => setImoveis(res.data))
      .catch(() => setImoveis([]))
      .finally(() => setLoading(false));
  }, [
    filters.estado,
    filters.cidade,
    filters.bairro,
    filters.nomeImovel,
    filters.tipoImovel,
    filters.precoMin,
    filters.precoMax,
    filters.quartos,
    filters.banheiros,
    filters.garagens,
  ]);

  const ordenarImoveis = (lista) => {
    if (ordem === "menor-preco") {
      return [...lista].sort(
        (a, b) => Number(a.imovel_valor) - Number(b.imovel_valor)
      );
    }
    if (ordem === "maior-preco") {
      return [...lista].sort(
        (a, b) => Number(b.imovel_valor) - Number(a.imovel_valor)
      );
    }
    return lista;
  };

  const imoveisOrdenados = ordenarImoveis(imoveis);

  const breadcrumb = [
    filters.estado || "Estado",
    filters.cidade || "Cidade",
    filters.bairro || null,
  ]
    .filter(Boolean)
    .join(" > ");

  // Função para verificar se o imóvel está nos favoritos
  function isImovelFavorito(imovel) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    return favoritos.some((f) => f.imovel_id === imovel.imovel_id);
  }

  // Função para adicionar/remover imóvel dos favoritos
  function handleToggleFavorite(imovel) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (isImovelFavorito(imovel)) {
      favoritos = favoritos.filter((f) => f.imovel_id !== imovel.imovel_id);
    } else {
      favoritos.push(imovel);
    }
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    // Força re-renderização
    setImoveis((prev) => [...prev]);
  }

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          {/* Botão para abrir gaveta no mobile */}
          <button
            className="md:hidden mb-4 bg-[#E94D0C] text-white px-4 py-2 rounded font-bold"
            onClick={() => setDrawerOpen(true)}
          >
            Filtros
          </button>
          {/* Gaveta lateral para mobile */}
          {drawerOpen && (
            <div className="fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black-05 bg-opacity-40"
                onClick={() => setDrawerOpen(false)}
              ></div>
              <aside className="relative bg-white w-80 max-w-full h-full shadow-lg z-50 animate-slideInRight">
                <button
                  className="absolute top-2 right-2 text-[#E94D0C] text-2xl font-bold"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Fechar filtros"
                >
                  ×
                </button>
                <SidebarFilters
                  filters={filters}
                  setFilters={setFilters}
                  onSearch={() => setDrawerOpen(false)}
                />
              </aside>
            </div>
          )}
          {/* Sidebar para desktop */}
          <aside className="hidden md:block w-full md:w-80 mb-6 md:mb-0">
            <SidebarFilters
              filters={filters}
              setFilters={setFilters}
              onSearch={() => { }}
            />
          </aside>
          <main className="flex-1">
            <div className="bg-white rounded-xl border border-[#E5E5E5] flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 mb-6 shadow-sm">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6 w-full">
                <div className="flex-1">
                  <nav className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <span>Casas para alugar</span>
                    {filters.estado && (
                      <>
                        <span className="mx-1">&gt;</span>
                        <span className="capitalize font-semibold text-gray-500">
                          {filters.estado}
                        </span>
                      </>
                    )}
                    {filters.cidade && (
                      <>
                        <span className="mx-1">&gt;</span>
                        <span className="capitalize font-semibold text-gray-500">
                          {filters.cidade}
                        </span>
                      </>
                    )}
                    {filters.bairro && (
                      <>
                        <span className="mx-1">&gt;</span>
                        <span className="capitalize font-semibold text-gray-500">
                          {filters.bairro}
                        </span>
                      </>
                    )}
                  </nav>
                  <h2 className="text-orange-600 font-semibold text-lg mt-1">
                    {imoveis.length} Casas para alugar
                    {filters.bairro
                      ? ` em ${filters.bairro}, ${filters.cidade} - ${filters.estado}`
                      : filters.cidade
                        ? ` em ${filters.cidade} - ${filters.estado}`
                        : filters.estado
                          ? ` em ${filters.estado}`
                          : ""}
                  </h2>
                  <FiltroResumo
                    filters={filters}
                    onRemove={(key) =>
                      setFilters((f) => ({ ...f, [key]: "" }))
                    }
                  />
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <label className="block text-xs text-gray-400 mb-1">
                  Ordenar por
                </label>
                <select
                  className="border rounded px-3 py-2 text-sm text-orange-600 font-semibold bg-white"
                  value={ordem}
                  onChange={(e) => setOrdem(e.target.value)}
                >
                  <option value="relevancia">Mais relevantes</option>
                  <option value="menor-preco">Menor preço</option>
                  <option value="maior-preco">Maior preço</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {loading && <div>Carregando imóveis...</div>}
              {!loading && imoveisOrdenados.length === 0 && (
                <div>Nenhum imóvel encontrado.</div>
              )}
              {!loading &&
                imoveisOrdenados.map((imovel) => (
                  <PropertyCard
                    key={imovel.imovel_id}
                    image={
                      imovel.imovel_tipo && imovel.imovel_tipo.toLowerCase() === "apartamento"
                        ? apartamento
                        : imagemCasa
                    }
                    address={imovel.imovel_logradouro}
                    neighborhood={imovel.imovel_bairro}
                    city={`${imovel.imovel_cidade} - ${imovel.imovel_estado}`}
                    description={imovel.imovel_descricao}
                    area={imovel.imovel_area}
                    bedrooms={imovel.imovel_quartos}
                    garages={imovel.imovel_garagens}
                    bathrooms={imovel.imovel_banheiros}
                    price={imovel.imovel_valor}
                    onContact={() => alert("Contato!")}
                    isFavorite={isImovelFavorito(imovel)}
                    onFavorite={() => handleToggleFavorite(imovel)}
                    imovelData={imovel}
                  />
                ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
