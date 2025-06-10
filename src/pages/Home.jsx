import SearchBar from "../components/SearchBar";
import imgPessoa from "../assets/pessoa.png"; 

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center px-6 py-8 bg-white">
        {/* Título e SearchBar */}
        <div className="w-full max-w-xl text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Onde você quer morar
          </h1>
          <SearchBar />
        </div>

        {/* Imagem abaixo do input */}
        <div className="w-full flex justify-center mt-8">
          <img
            src={imgPessoa}
            alt="Pessoa"
            className="w-2/3 sm:w-1/2 max-w-sm"
          />
        </div>
      </main>
    </div>
  );
}
