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
    console.log("submit"); // Veja se aparece no console
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
        className="flex items-center border-laranja border-2 border-primary rounded-full px-2 py-2 w-full bg-white"
        onSubmit={handleBuscar}
      >
        <img src={loca} alt="" className="ml-2 mr-4" />
        <select
          className="flex-1 text-2xl outline-none font-inter bg-transparent"
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
        <button
          type="submit"
          className="flex items-center justify-center bg-laranja2 text-white rounded-full font-medium hover:bg-orange-800 duration-200 cursor-pointer ml-4 px-8 py-3 sm:px-8 sm:py-3 px-4 py-2"
          disabled={loading}
        >
          {/* Ícone de lupa para mobile */}
          <span className="block sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
      {erro && <div className="text-red-600 mt-2">{erro}</div>}
    </div>
  );
}
