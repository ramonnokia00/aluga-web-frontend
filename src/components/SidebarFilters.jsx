import React from "react";
import { FaHome, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

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
              onChange={(e) =>
                setFilters((f) => ({ ...f, localizacao: e.target.value }))
              }
            />
          </div>
          {filters.localizacao && (
            <span className="inline-block bg-[#E94D0C] text-white text-xs rounded-full px-3 py-1 mt-2">
              {filters.localizacao}{" "}
              <span
                className="ml-1 cursor-pointer"
                onClick={() => setFilters((f) => ({ ...f, localizacao: "" }))}
              >
                ×
              </span>
            </span>
          )}
        </div>

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
