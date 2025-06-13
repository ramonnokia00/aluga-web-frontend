import { useLocation } from "react-router-dom";
import Abas from "../components/Abas";
import Card from "../components/Card";

export default function Imoveis() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const estado = params.get("estado");

  return (
    <div>
      <h1>Imóveis para o estado: {estado}</h1>
      <Abas/>
      <Card />
    </div>
  );
}
