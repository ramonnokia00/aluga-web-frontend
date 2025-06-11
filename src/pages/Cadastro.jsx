import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconeCasa from "../assets/icone.png";
import { FiArrowLeft } from "react-icons/fi";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de cadastro aqui
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-sm"
        >
          <div className="flex items-center gap-2 mb-8">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-[#DF4300] text-2xl cursor-pointer hover:opacity-70 transition"
              aria-label="Voltar para login"
            >
              <FiArrowLeft />
            </button>
            <div className="bg-[#DF4300] rounded flex items-center justify-center p-1">
              <img src={iconeCasa} alt="Logo" className="w-8 h-8" />
            </div>
            <span className="font-bold text-[#DF4300] text-xl ml-2">
              Aluga Web
            </span>
          </div>
          <label className="block mb-4">
            <span className="text-gray-700">Nome</span>
            <input
              type="text"
              className="mt-1 block w-full rounded bg-gray-100 p-2 outline-none"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full rounded bg-gray-100 p-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Senha</span>
            <input
              type="password"
              className="mt-1 block w-full rounded bg-gray-100 p-2 outline-none"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-[#DF4300] text-white font-semibold rounded py-2 text-lg hover:bg-[#b33600] transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
      <footer className="text-center text-xs text-[#DF4300] font-bold mt-4 mb-2">
        Aluga web, Todos os direitos reservados.
      </footer>
    </div>
  );
}
