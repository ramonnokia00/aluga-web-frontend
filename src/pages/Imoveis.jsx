import { useLocation } from "react-router-dom";

export default function Imoveis() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const estado = params.get("estado");

  return (
    <div>
      <h1>Imóveis para o estado: {estado}</h1>
      {/* Aqui você pode renderizar os imóveis filtrados */}
    </div>
  );
}
