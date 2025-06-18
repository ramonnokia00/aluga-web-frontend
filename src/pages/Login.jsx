import { useState } from "react";
// import { useLogin } from './context/LoginContext';
import icone from "../assets/icone.png";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // const { login, loading, error } = useLogin();
  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/imoveis");
    // await login(email, senha);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white flex justify-center min-h-screen items-center md:mb-3">
        <div className="bg-white h-[420px] w-[400px] border-gray-300 rounded items-center inline-block p-4 border-[1px] shadow-lg">
          <div className="items-center">
            <div className="flex gap-4 justify-center mb-4">
              <div className="bg-[#E04300] rounded">
                <img src={icone} alt="Logo" className="p-2 w-12 h-12" />
              </div>
              <p className="font-bold text-[#DF4300] text-3xl">Aluga Web</p>
            </div>
            <label>
              <h4 className="font-semibold text-[#959595] my-2 ml-2">Email</h4>
              <input
                type="email"
                className="bg-gray-300 rounded w-full p-2"
                placeholder="@gmail.com"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </label>
            <label>
              <h4 className="font-semibold text-[#959595] my-2 ml-2">Senha</h4>
              <input
                type="password"
                placeholder="******"
                className="bg-gray-300 rounded w-full p-2"
                // value={senha}
                // onChange={(e) => setSenha(e.target.value)}
                // required
              />
            </label>
          </div>
          <div className="flex justify-between items-center mb-6 mt-5">
            <Link
              to="/esqueci-senha"
              className="text-[#DF4300] font-semibold hover:underline"
            >
              Esqueci a senha
            </Link>
            <Link
              to="/cadastro"
              className="font-semibold text-[#DF4300] hover:underline"
            >
              Criar Conta
            </Link>
          </div>
          <button
            type="submit"
            // disabled={loading}
            className="w-full bg-[#E04300] rounded-xl hover:bg-[#8a2b02] cursor-pointer text-white font-bold p-3 duration-200"
          >
            Entrar
            {/* {loading ? 'Carregando...' : 'Entrar'} */}
          </button>
          {/* {error && <p className="text-red-500 text-center mt-2">{error}</p>} */}
        </div>
      </div>
    </form>
  );
};

export default Login;
