import React from "react";
import PropertyCard from "../components/PropertyCard";
import imagemCasa from "../assets/imagemcasa.png";

const Favoritos = () => {
  // Exemplo de lista de favoritos (futuramente você pode puxar via API ou Context)
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-[#DF4300] mb-4">Meus Favoritos</h1>

      {favoritos.length === 0 ? (
        <p className="text-gray-500">Você ainda não adicionou nenhum imóvel aos favoritos.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {favoritos.map((imovel) => (
            <PropertyCard
              key={imovel.imovel_id}
              image={imovel.imovel_imagem || imagemCasa}
              address={`${imovel.imovel_logradouro}, ${imovel.imovel_numero}`}
              neighborhood={imovel.imovel_bairro}
              city={`${imovel.imovel_cidade} - ${imovel.imovel_estado}`}
              description={`${imovel.imovel_tipo}\n${imovel.imovel_descricao}`}
              area={imovel.imovel_area}
              bedrooms={imovel.imovel_quartos}
              garages={imovel.imovel_garagens}
              price={imovel.imovel_valor}
              onContact={() => alert("Contato!")}
              isFavorite={true}
              onFavorite={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
