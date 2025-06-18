import React from "react";

/**
 * Componente de resumo dos filtros ativos (estado, cidade, bairro, etc)
 * Exibe os chips de filtro e permite limpar cada filtro individualmente.
 * Deve ser posicionado acima dos cards e ao lado do select de ordenação.
 */
export default function FiltroResumo({ filters, onRemove }) {
  // Monta lista de filtros ativos
  const chips = [
    filters.estado && { label: filters.estado, key: "estado" },
    filters.cidade && { label: filters.cidade, key: "cidade" },
    filters.bairro && { label: filters.bairro, key: "bairro" },
    filters.nomeImovel && { label: filters.nomeImovel, key: "nomeImovel" },
    filters.tipoImovel && { label: filters.tipoImovel, key: "tipoImovel" },
    filters.precoMin && {
      label: `A partir de R$ ${filters.precoMin}`,
      key: "precoMin",
    },
    filters.precoMax && {
      label: `Até R$ ${filters.precoMax}`,
      key: "precoMax",
    },
    filters.quartos && { label: `${filters.quartos} Quartos`, key: "quartos" },
    filters.banheiros && {
      label: `${filters.banheiros} Banheiros`,
      key: "banheiros",
    },
    filters.garagens && {
      label: `${filters.garagens} Garagens`,
      key: "garagens",
    },
  ].filter(Boolean);

  if (chips.length === 0) return null;

  return (
    <>
      <div className="flex flex-wrap gap-2 items-center mt-2">
        {chips.map((chip) => (
          <span
            key={chip.key}
            className="flex items-center border border-[#E94D0C] text-[#E94D0C] font-semibold px-4 h-7 text-xs rounded-lg bg-transparent transition-colors duration-150 cursor-pointer hover:bg-[#FFF3ED] hover:shadow-sm"
            style={{ minHeight: 28, borderRadius: 8 }}
          >
            {chip.label}
            <button
              className="ml-2 text-[#E94D0C] hover:text-[#b33600] font-bold text-base leading-none focus:outline-none"
              style={{ lineHeight: 1, fontSize: 18, marginTop: -2 }}
              onClick={() => onRemove(chip.key)}
              title="Remover filtro"
              aria-label={`Remover filtro ${chip.label}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>
      {/* Botão fixo do Instagram */}
      <a
        href="https://www.instagram.com/equipe02gt10/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg p-0.5 hover:scale-105 transition-transform"
        title="Instagram Equipe 02 GT10"
        style={{
          width: 54,
          height: 54,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 448 512"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 1.7 353.3 0C317.7-1.7 130.3-1.7 94.7 0 59.4 1.7 28 9.9 1.7 36.2S1.7 123.4 0 158.7c-1.7 35.6-1.7 223.1 0 258.7 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.6 1.7 223.1 1.7 258.7 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.6 1.7-223.1 0-258.7zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.1 9 190.9 11.6 224 11.6s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z" />
        </svg>
      </a>
    </>
  );
}
