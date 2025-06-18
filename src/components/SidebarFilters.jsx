import React from "react";
import { FaHome, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

const ESTADOS = [
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" },
];

function handleLocalizacaoChange(e, setFilters) {
  const value = e.target.value.trim();
  // Tenta identificar se é um estado
  const estado = ESTADOS.find(
    (uf) =>
      uf.nome.toLowerCase() === value.toLowerCase() ||
      uf.sigla.toLowerCase() === value.toLowerCase()
  );
  if (estado) {
    setFilters((f) => ({
      ...f,
      estado: estado.sigla,
      cidade: "",
      bairro: "",
      localizacao: value,
    }));
    return;
  }
  // Se não for estado, limpa estado e tenta cidade/bairro
  setFilters((f) => ({
    ...f,
    estado: "",
    cidade: value,
    bairro: "",
    localizacao: value,
  }));
}

export default function SidebarFilters({ filters, setFilters }) {
  return (
    <aside className="bg-white border border-[#E5E5E5] rounded-2xl w-full md:w-80 flex flex-col p-0">
      <div className="flex rounded-t-2xl overflow-hidden">
        <button
          className={`flex-1 py-3 font-semibold text-base transition ${
            filters.tipoNegocio === "comprar"
              ? "bg-[#E94D0C] text-white"
              : "bg-[#D6D6D6] text-[#444]"
          }`}
          onClick={() => setFilters((f) => ({ ...f, tipoNegocio: "comprar" }))}
        >
          Comprar
        </button>
        <button
          className={`flex-1 py-3 font-semibold text-base transition ${
            filters.tipoNegocio === "alugar"
              ? "bg-[#E94D0C] text-white"
              : "bg-[#D6D6D6] text-[#444]"
          }`}
          onClick={() => setFilters((f) => ({ ...f, tipoNegocio: "alugar" }))}
        >
          Alugar
        </button>
      </div>

      <div className="p-6 pt-4">
        {/* Localização */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#222] mb-2">
            Localização
          </label>
          <div className="relative mb-2">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-[#BDBDBD]" />
            <input
              type="text"
              placeholder="Digite o bairro, rua ou cidade"
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] text-sm text-[#222] placeholder-[#BDBDBD] outline-none"
              value={filters.localizacao}
              onChange={(e) => handleLocalizacaoChange(e, setFilters)}
            />
          </div>
          {filters.localizacao && (
            <span className="inline-block bg-[#E94D0C] text-white text-xs rounded-full px-3 py-1 mt-2">
              {filters.localizacao}{" "}
              <span
                className="ml-1 cursor-pointer"
                onClick={() =>
                  setFilters((f) => ({
                    ...f,
                    localizacao: "",
                    estado: "",
                    cidade: "",
                    bairro: "",
                  }))
                }
              >
                ×
              </span>
            </span>
          )}
        </div>

        {/* Chips de cidades e bairros (estilo FIFA) */}
        {filters.estado && (
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Chips de cidades - exemplo estático, troque por cidades reais se tiver */}
            {["Cidade", "Cidade", "Cidade", "Cidade", "Cidade"].map(
              (cidade, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-1 rounded-full border text-xs font-semibold transition-all ${
                    filters.cidade && idx === 0
                      ? "bg-[#E94D0C] text-white border-[#E94D0C]"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                  onClick={() =>
                    setFilters((f) => ({
                      ...f,
                      cidade: idx === 0 ? f.cidade : "",
                      bairro: "",
                    }))
                  }
                >
                  {cidade}
                </button>
              )
            )}
          </div>
        )}
        {filters.cidade && (
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Chips de bairros - exemplo estático, troque por bairros reais se tiver */}
            {["Bairro", "Bairro", "Bairro", "Bairro", "Bairro"].map(
              (bairro, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-1 rounded-full border text-xs font-semibold transition-all ${
                    filters.bairro && idx === 0
                      ? "bg-[#E94D0C] text-white border-[#E94D0C]"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
                  onClick={() =>
                    setFilters((f) => ({
                      ...f,
                      bairro: idx === 0 ? f.bairro : "",
                    }))
                  }
                >
                  {bairro}
                </button>
              )
            )}
          </div>
        )}

        <div className="border-t border-[#E5E5E5] my-4" />

        {/* Tipos de imóveis */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#222] mb-2">
            Tipos de imóveis
          </label>
          <div className="flex gap-2">
            <button
              className={`flex-1 flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-lg font-semibold text-xs border-none ${
                filters.tipoImovel === "casa"
                  ? "bg-[#E94D0C] text-white"
                  : "bg-[#FFE5DA] text-[#E94D0C]"
              }`}
              onClick={() => setFilters((f) => ({ ...f, tipoImovel: "casa" }))}
            >
              <FaHome size={18} />
              Casa
            </button>
            <button
              className={`flex-1 flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-lg font-semibold text-xs border-none ${
                filters.tipoImovel === "apartamento"
                  ? "bg-[#E94D0C] text-white"
                  : "bg-[#FFE5DA] text-[#E94D0C]"
              }`}
              onClick={() =>
                setFilters((f) => ({ ...f, tipoImovel: "apartamento" }))
              }
            >
              <FaBuilding size={18} />
              Apartamento
            </button>
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] my-4" />

        {/* Preço */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#222] mb-2">
            Preço a partir de
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="0"
              className="w-1/2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg px-3 py-2 text-sm text-[#222] placeholder-[#BDBDBD] outline-none"
              value={filters.precoMin}
              onChange={(e) =>
                setFilters((f) => ({ ...f, precoMin: e.target.value }))
              }
            />
            <input
              type="number"
              placeholder="0"
              className="w-1/2 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg px-3 py-2 text-sm text-[#222] placeholder-[#BDBDBD] outline-none"
              value={filters.precoMax}
              onChange={(e) =>
                setFilters((f) => ({ ...f, precoMax: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] my-4" />

        {/* Quantidade de quartos */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#222] mb-2">
            Quantidade de quartos
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((q) => (
              <button
                key={q}
                className={`px-5 py-2 rounded-lg font-semibold text-xs border-none ${
                  filters.quartos === q
                    ? "bg-[#E94D0C] text-white"
                    : "bg-[#FFE5DA] text-[#E94D0C]"
                }`}
                onClick={() => setFilters((f) => ({ ...f, quartos: q }))}
              >
                +{q}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] my-4" />

        {/* Banheiros */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-[#222] mb-2">
            Banheiros
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((b) => (
              <button
                key={b}
                className={`px-5 py-2 rounded-lg font-semibold text-xs border-none ${
                  filters.banheiros === b
                    ? "bg-[#E94D0C] text-white"
                    : "bg-[#FFE5DA] text-[#E94D0C]"
                }`}
                onClick={() => setFilters((f) => ({ ...f, banheiros: b }))}
              >
                +{b}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#E5E5E5] my-4" />

        {/* Garagens */}
        <div>
          <label className="block text-xs font-semibold text-[#222] mb-2">
            Garagens
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((g) => (
              <button
                key={g}
                className={`px-5 py-2 rounded-lg font-semibold text-xs border-none ${
                  filters.garagens === g
                    ? "bg-[#E94D0C] text-white"
                    : "bg-[#FFE5DA] text-[#E94D0C]"
                }`}
                onClick={() => setFilters((f) => ({ ...f, garagens: g }))}
              >
                +{g}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
