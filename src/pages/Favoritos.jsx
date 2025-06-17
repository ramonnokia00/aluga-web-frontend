import React from "react";

const Favoritos = () => {
  // Exemplo de lista de favoritos (futuramente você pode puxar via API ou Context)
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-[#DF4300] mb-4">Meus Favoritos</h1>

      {favoritos.length === 0 ? (
        <p className="text-gray-500">Você ainda não adicionou nenhum imóvel aos favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritos.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img 
                src={item.imagem || "/no-image.png"} 
                alt={item.nome} 
                className="w-full h-40 object-cover rounded mb-2" 
              />
              <h2 className="text-lg font-semibold">{item.nome}</h2>
              <p className="text-gray-600">{item.descricao}</p>
              <p className="text-[#DF4300] font-bold mt-2">R$ {item.preco}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
