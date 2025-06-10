
import loca from "../assets/iconelocali.png"
export default function SearchBar() {
  return (
    <form className="flex items-center justify-between gap-6 border-laranja border-2 border-primary rounded-full px-2 py-2 w-full  bg-white">
      <img src={loca} alt="" />
      <input
        type="text"
        placeholder="Digite a cidade ou bairro"
        className="text-2xl outline-none font-inter"
      />
      <button
        type="submit"
        className="ml-2 bg-laranja2 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-800 duration-200 cursor-pointer"
      >
        Buscar
      </button>
    </form>
  );
}