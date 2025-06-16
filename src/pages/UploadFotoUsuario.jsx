import { useState } from "react";
import { useLogin } from "../contexts/LoginContext";
import api from "../services/api";

export default function UploadFotoUsuario() {
  const { usuario, setUsuario } = useLogin();
  const [foto, setFoto] = useState(null);
  const [mensagem, setMensagem] = useState("");

  async function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", usuario.id);
    formData.append("foto", foto);

    const res = await api.post("/usuarios/upload-foto", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setUsuario({ ...usuario, foto: res.data.foto });
    setMensagem("Foto atualizada!");
  }

  return (
    <form onSubmit={handleUpload} className="flex flex-col gap-2">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFoto(e.target.files[0])}
        required
      />
      <button type="submit">Enviar Foto</button>
      {mensagem && <p>{mensagem}</p>}
    </form>
  );
}
