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
  // Função para alternar filtros numéricos (quartos, banheiros, garagens)
  const toggleNumericFilter = (key, value) => {
    setFilters((f) => ({ ...f, [key]: f[key] === value ? "" : value }));
  };

  // Função para alternar tipoNegocio como switcher exclusivo
  const setTipoNegocioSwitcher = (tipo) => {
    setFilters((f) => ({ ...f, tipoNegocio: tipo }));
  };

  return (
    <aside className="bg-white border border-[#E5E5E5] rounded-2xl w-full md:w-80 flex flex-col p-0">
      <div className="flex rounded-t-2xl overflow-hidden">
        <button
          className={`flex-1 py-3 font-semibold text-base transition ${
            filters.tipoNegocio === "comprar"
              ? "bg-[#E94D0C] text-white"
              : "bg-[#D6D6D6] text-[#444]"
          }`}
          onClick={() => setTipoNegocioSwitcher("comprar")}
          type="button"
        >
          Comprar
        </button>
        <button
          className={`flex-1 py-3 font-semibold text-base transition ${
            filters.tipoNegocio === "alugar"
              ? "bg-[#E94D0C] text-white"
              : "bg-[#D6D6D6] text-[#444]"
          }`}
          onClick={() => setTipoNegocioSwitcher("alugar")}
          type="button"
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
