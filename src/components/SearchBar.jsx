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
        className="flex items-center gap-4 border-laranja border-2 border-primary rounded-full px-2 py-2 w-full bg-white"
        onSubmit={handleBuscar}
      >
        <img src={loca} alt="" />
        <select
          className="text-2xl outline-none font-inter w-48"
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
          className="bg-laranja2 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-800 duration-200 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>
      {erro && <div className="text-red-600 mt-2">{erro}</div>}
    </div>
  );
}
