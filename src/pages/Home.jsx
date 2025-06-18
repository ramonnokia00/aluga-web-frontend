import SearchBar from "../components/SearchBar";
import imgPessoa from "../assets/pessoa.png";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col lg:flex-row items-center justify-between px-6 py-8 bg-white min-h-[70vh]">
        {/* Título e SearchBar */}
        <div className="w-full max-w-xl text-center lg:text-left lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Onde você quer morar
          </h1>
          <SearchBar />
        </div>

        {/* Imagem à direita */}
        <div className="md:w-full flex justify-center lg:justify-end lg:w-1/2 mt-8">
          <img
            src={imgPessoa}
            alt="Pessoa"
            className="w-2/3 sm:w-1/2 lg:w-[420px] max-w-sm"
          />
        </div>
      </main>
    </div>
  );
}