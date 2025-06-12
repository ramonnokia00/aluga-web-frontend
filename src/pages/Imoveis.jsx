import { useLocation } from "react-router-dom";
import Abas from "../components/Abas";

export default function Imoveis() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const estado = params.get("estado");

  return (
    <>
      <h1>Imóveis para o estado: {estado}</h1>
      <Abas/>
    </>
  );
}
