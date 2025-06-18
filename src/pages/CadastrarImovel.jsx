import React, { useState } from "react";
import { useLogin } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { FaUpload, FaFileImage } from "react-icons/fa";
import api from "../services/api";

export default function CadastrarImovel() {
  const { usuario } = useLogin();
  const [form, setForm] = useState({
    imovel_nome: "",
    imovel_estado: "",
    imovel_cidade: "",
    imovel_bairro: "",
    imovel_logradouro: "",
    imovel_numero: "",
    imovel_complemento: "",
    imovel_cep: "",
    imovel_tipo: "",
    imovel_modalidade: "",
    imovel_valor: "",
    imovel_valor_condominio: "",
    imovel_descricao: "",
    imovel_quartos: "",
    imovel_garagens: "",
    imovel_banheiros: "",
    imovel_area: "",
    imovel_contato1: "",
    imovel_contato2: "",
  });
  const [valorFormatado, setValorFormatado] = useState("");
  const [valorCondominioFormatado, setValorCondominioFormatado] = useState("");
  const [imagens, setImagens] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImagem(e) {
    setImagens(Array.from(e.target.files));
  }

  function handleValor(e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = (Number(valor) / 100).toFixed(2);
    setValorFormatado(
      valor === "0.00"
        ? ""
        : `R$ ${valor.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
    );
    setForm({ ...form, imovel_valor: valor });
  }

  function handleValorCondominio(e) {
    let valor = e.target.value.replace(/\D/g, "");
    valor = (Number(valor) / 100).toFixed(2);
    setValorCondominioFormatado(
      valor === "0.00"
        ? ""
        : `R$ ${valor.replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
    );
    setForm({ ...form, imovel_valor_condominio: valor });
  }

  function handleCep(e) {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 5) v = v.replace(/(\d{5})(\d{1,3})/, "$1-$2");
    setForm({ ...form, imovel_cep: v });
  }

  function handleTelefone(e, field) {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 10) v = v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    else if (v.length > 5) v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    else if (v.length > 2) v = v.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    setForm({ ...form, [field]: v });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!usuario) {
      setMensagem("Você precisa estar logado para cadastrar um imóvel.");
      return;
    }
    setShowConfirm(true);
  }

  async function confirmarCadastro() {
    setShowConfirm(false);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    imagens.forEach((img) => formData.append("imagens", img));
    formData.append("usuario_id", usuario.usuario_id);
    try {
      await api.post("/imoveis", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMensagem("Imóvel cadastrado com sucesso!");
      setTimeout(() => navigate("/imoveis"), 1200);
      setForm({
        imovel_nome: "",
        imovel_estado: "",
        imovel_cidade: "",
        imovel_bairro: "",
        imovel_logradouro: "",
        imovel_numero: "",
        imovel_complemento: "",
        imovel_cep: "",
        imovel_tipo: "",
        imovel_modalidade: "",
        imovel_valor: "",
        imovel_valor_condominio: "",
        imovel_descricao: "",
        imovel_quartos: "",
        imovel_garagens: "",
        imovel_banheiros: "",
        imovel_area: "",
        imovel_contato1: "",
        imovel_contato2: "",
      });
      setValorFormatado("");
      setValorCondominioFormatado("");
      setImagens([]);
    } catch (err) {
      setMensagem("Erro ao cadastrar imóvel.");
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 shadow mt-8 mb-24">
      <h2 className="text-2xl font-bold mb-6 text-[#E94D0C]">
        Cadastrar Imóvel
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="rounded-lg border border-[#E5E5E5] p-3"
          type="text"
          name="imovel_nome"
          placeholder="Nome do imóvel"
          value={form.imovel_nome}
          onChange={handleChange}
          required
        />
        <div className="flex gap-2">
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/2"
            type="text"
            name="imovel_estado"
            placeholder="Estado"
            value={form.imovel_estado}
            onChange={handleChange}
            required
            maxLength={2}
          />
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/2"
            type="text"
            name="imovel_cidade"
            placeholder="Cidade"
            value={form.imovel_cidade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-2">
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/2"
            type="text"
            name="imovel_bairro"
            placeholder="Bairro"
            value={form.imovel_bairro}
            onChange={handleChange}
            required
          />
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/2"
            type="text"
            name="imovel_logradouro"
            placeholder="Logradouro"
            value={form.imovel_logradouro}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-2">
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/3"
            type="text"
            name="imovel_numero"
            placeholder="Número"
            value={form.imovel_numero}
            onChange={handleChange}
            required
          />
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-2/3"
            type="text"
            name="imovel_complemento"
            placeholder="Complemento (opcional)"
            value={form.imovel_complemento}
            onChange={handleChange}
          />
        </div>
        <input
          className="rounded-lg border border-[#E5E5E5] p-3"
          type="text"
          name="imovel_cep"
          placeholder="CEP"
          value={form.imovel_cep}
          onChange={handleCep}
          required
          maxLength={9}
        />
        <select
          className="rounded-lg border border-[#E5E5E5] p-3"
          name="imovel_tipo"
          value={form.imovel_tipo}
          onChange={handleChange}
          required
        >
          <option value="">Tipo de imóvel</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
        </select>
        <select
          className="rounded-lg border border-[#E5E5E5] p-3"
          name="imovel_modalidade"
          value={form.imovel_modalidade}
          onChange={handleChange}
          required
        >
          <option value="">Modalidade</option>
          <option value="Aluguel">Aluguel</option>
          <option value="Venda">Venda</option>
        </select>
        <div className="flex gap-2">
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/3"
            type="number"
            name="imovel_quartos"
            placeholder="Quartos"
            value={form.imovel_quartos}
            onChange={handleChange}
            required
            min={1}
          />
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/3"
            type="number"
            name="imovel_banheiros"
            placeholder="Banheiros"
            value={form.imovel_banheiros}
            onChange={handleChange}
            required
            min={1}
          />
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/3"
            type="number"
            name="imovel_garagens"
            placeholder="Garagens"
            value={form.imovel_garagens}
            onChange={handleChange}
            required
            min={0}
          />
        </div>
        <input
          className="rounded-lg border border-[#E5E5E5] p-3"
          type="number"
          name="imovel_area"
          placeholder="Área (m²)"
          value={form.imovel_area}
          onChange={handleChange}
          required
          min={1}
        />
        <div>
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-full"
            type="text"
            name="imovel_valor"
            placeholder="Valor do imóvel"
            value={valorFormatado}
            onChange={handleValor}
            required
            inputMode="numeric"
            maxLength={15}
          />
        </div>
        <div>
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-full"
            type="text"
            name="imovel_valor_condominio"
            placeholder="Valor do condomínio"
            value={valorCondominioFormatado}
            onChange={handleValorCondominio}
            inputMode="numeric"
            maxLength={15}
          />
        </div>
        <textarea
          className="rounded-lg border border-[#E5E5E5] p-3"
          name="imovel_descricao"
          placeholder="Descrição do imóvel"
          value={form.imovel_descricao}
          onChange={handleChange}
          required
          rows={3}
        />
        <div className="flex gap-2">
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/2"
            type="text"
            name="imovel_contato1"
            placeholder="Contato 1 (WhatsApp)"
            value={form.imovel_contato1}
            onChange={e => handleTelefone(e, "imovel_contato1")}
            required
            maxLength={15}
          />
          <input
            className="rounded-lg border border-[#E5E5E5] p-3 w-1/2"
            type="text"
            name="imovel_contato2"
            placeholder="Contato 2 (opcional)"
            value={form.imovel_contato2}
            onChange={e => handleTelefone(e, "imovel_contato2")}
            maxLength={15}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="block text-gray-700 font-medium">
            Fotos do imóvel
          </label>
          <div
            className="flex gap-2 flex-wrap mt-2 overflow-y-auto"
            style={{ maxHeight: "160px" }}
          >
            {imagens.map((img, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 bg-[#444] text-white px-2 py-1 rounded"
              >
                <FaFileImage />
                <span className="text-xs">{img.name}</span>
                <img
                  src={URL.createObjectURL(img)}
                  alt={img.name}
                  className="w-8 h-8 object-cover rounded ml-1 border border-white"
                />
              </div>
            ))}
          </div>
          <input
            id="imagem"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagem}
            className="hidden"
            required
          />
          <label
            htmlFor="imagem"
            className="flex items-center gap-2 cursor-pointer bg-[#E94D0C] text-white px-4 py-2 rounded-lg w-fit hover:bg-[#d13f00] transition font-semibold mt-2"
          >
            <FaUpload />
            Escolher arquivos
          </label>
        </div>
        <button
          className="bg-[#E94D0C] text-white rounded-lg py-3 font-semibold text-lg mt-2 hover:bg-[#d13f00] transition"
          type="submit"
        >
          Cadastrar
        </button>
        {mensagem && (
          <div className="text-center mt-2 text-[#E94D0C] font-medium">
            {mensagem}
          </div>
        )}
      </form>
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col gap-4 min-w-[320px]">
            <p className="text-lg font-semibold text-[#E94D0C]">
              Tem certeza que deseja cadastrar este imóvel?
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={confirmarCadastro}
                className="bg-[#E94D0C] text-white px-4 py-2 rounded font-bold"
              >
                Confirmar
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-200 px-4 py-2 rounded font-bold"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
