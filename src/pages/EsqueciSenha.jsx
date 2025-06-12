import { useState } from "react";
import { Link } from "react-router-dom";
import icone from "../assets/icone.png";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    setMensagem("");
    if (!email) {
      setErro("Preencha o e-mail.");
      return;
    }
    // Aqui você pode chamar sua API de recuperação de senha
    setMensagem(
      "Se o e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha."
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6 gap-3">
          <div className="bg-[#DF4300] rounded flex justify-center items-center">
            <img src={icone} alt="Logo" className="p-1 w-12 h-12" />
          </div>
          <h1 className="text-[#DF4300] text-3xl font-bold">Aluga Web</h1>
        </div>
        <h2 className="text-xl font-bold mb-4 text-center">
          Esqueci minha senha
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-lg font-semibold" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#DF4300] bg-gray-200"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {erro && <span className="text-red-600 text-sm">{erro}</span>}
          {mensagem && (
            <span className="text-green-600 text-sm">{mensagem}</span>
          )}
          <button
            type="submit"
            className="bg-[#DF4300] text-white font-bold rounded py-3 mt-2 hover:bg-orange-700 transition"
          >
            Enviar
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <Link
            to="/login"
            className="text-[#DF4300] font-semibold hover:underline"
          >
            Voltar para login
          </Link>
          <Link
            to="/criar-conta"
            className="text-[#DF4300] font-semibold hover:underline"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  );
}
