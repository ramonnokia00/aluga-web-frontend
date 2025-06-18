import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../services/api";
import { useLogin } from "../contexts/LoginContext";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState(null);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  const { register, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    const formData = new FormData();
    formData.append("usuario_nome", nome);
    formData.append("usuario_email", email);
    formData.append("usuario_telefone", telefone);
    formData.append("usuario_nascimento", nascimento);
    formData.append("usuario_senha", senha);
    if (foto) formData.append("usuario_imagem", foto);
    const resultado = await register(formData);
    if (resultado.sucesso) {
      navigate("/imoveis");
    } else {
      setErro(resultado.erro || "Erro ao cadastrar usuário");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
        background: "#fff",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: "#DF4300", marginBottom: 24 }}>Aluga Web</h2>

        <div style={{ marginBottom: 12 }}>
          <label>Nome</label>
          <input
            style={{ width: "100%" }}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input
            style={{ width: "100%" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Telefone</label>
          <input
            style={{ width: "100%" }}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Nascimento</label>
          <input
            style={{ width: "100%" }}
            type="date"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Senha</label>
          <input
            style={{ width: "100%" }}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <label className="block mb-6">
          <span className="text-gray-700 font-semibold">Foto de Perfil</span>
          <input
            type="file"
            name="usuario_imagem"
            accept="image/*"
            className="mt-1 block w-full text-gray-700 bg-white border border-gray-300 rounded cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#DF4300] file:text-white hover:file:bg-[#b33600]"
            onChange={(e) => setFoto(e.target.files[0])}
            required
          />
          <span className="text-xs text-gray-500 block mt-1">
            Selecione uma imagem do seu computador para ser sua foto de perfil.
          </span>
          {foto && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(foto)}
                alt="Pré-visualização"
                className="h-16 w-16 object-cover rounded-full border"
              />
            </div>
          )}
        </label>

        {erro && <div style={{ color: "red", marginBottom: 12 }}>{erro}</div>}

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#DF4300",
            color: "#fff",
            border: "none",
            padding: "12px 0",
            borderRadius: 4,
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Cadastrar
        </button>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          Já possui Cadastro? <NavLink to="/login">Entrar</NavLink>
        </div>
      </form>
    </div>
  );
}
