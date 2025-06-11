import { useState, useEffect } from "react";
import axios from "axios";
import loca from "../assets/iconelocali.png";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [estados, setEstados] = useState([]);
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Carrega estados ao iniciar
  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => {
        const ordenados = res.data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(ordenados);
      });
  }, []);

  const handleBuscar = (e) => {
    e.preventDefault();
    console.log("submit");
    setErro("");
    setLoading(true);

    if (!estado) {
      setErro("Selecione o estado.");
      setLoading(false);
      return;
    }

    // Redireciona para a página de imóveis filtrados
    navigate(`/imoveis?estado=${estado}`);
  };

  return (
    <div className="w-full">
      <form
        className="flex flex-col sm:flex-row items-center border-laranja border-2 border-primary rounded-full px-4 py-2 w-full bg-white sm:max-w-none max-w-xs mx-auto"
        onSubmit={handleBuscar}
      >
        {/* Ícone de localização */}
        <img
          src={loca}
          alt="Ícone de localização"
          className="w-6 h-6 mb-2 sm:mb-0 sm:ml-2 sm:mr-4"
        />

        {/* Select para escolher o estado */}
        <select
          className="flex-1 text-base sm:text-lg outline-none font-inter bg-transparent mb-2 sm:mb-0 text-center sm:text-left"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="">Selecione o estado</option>
          {estados.map((uf) => (
            <option key={uf.id} value={uf.sigla}>
              {uf.nome} ({uf.sigla})
            </option>
          ))}
        </select>

        {/* Botão de busca */}
        <button
          type="submit"
          className="flex items-center justify-center bg-laranja2 text-white rounded-full font-medium hover:bg-orange-800 duration-200 cursor-pointer px-4 py-2 sm:px-8 sm:py-3"
          disabled={loading}
        >
          {/* Ícone de lupa para mobile */}
          <span className="block sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="16.5"
                y1="16.5"
                x2="21"
                y2="21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {/* Texto "Buscar" para desktop */}
          <span className="hidden sm:block">
            {loading ? "Buscando..." : "Buscar"}
          </span>
        </button>
      </form>
      {erro && <div className="text-red-600 mt-2 text-center">{erro}</div>}
    </div>
  );
}
