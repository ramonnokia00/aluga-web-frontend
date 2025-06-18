import React from "react";
import { FaHeart, FaBed, FaCar, FaBath } from "react-icons/fa";

const PropertyCard = ({
  image,
  address,
  neighborhood,
  city,
  description,
  area,
  bedrooms,
  garages,
  bathrooms,
  price,
  onContact,
  isFavorite,
  onFavorite,
}) => {
  return (
    <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto my-6 relative border border-gray-200 min-h-[200px]">
      {/* Imagem */}
      <div className="w-60 h-48 flex-shrink-0">
        <img
          src={image}
          alt="Casa"
          className="object-cover w-full h-full rounded-l-2xl"
        />
      </div>
      {/* Conteúdo */}
      <div className="flex-1 flex flex-col justify-between p-6 relative">
        {/* Favorito */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-orange-500 transition"
          onClick={onFavorite}
        >
          <FaHeart size={22} className={isFavorite ? "text-orange-500" : ""} />
        </button>
        {/* Endereço e bairro */}
        <div>
          <h3 className="font-semibold text-base text-gray-800 mb-1">
            {address || "-"}
          </h3>
          <span className="text-sm text-gray-500 block mb-1">
            {neighborhood || "-"}, {city || "-"}
          </span>
          <p className="text-sm text-gray-500 whitespace-pre-line">
            {description || "-"}
          </p>
        </div>
        {/* Detalhes */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-4 text-gray-500 text-base">
          <span>{area ? `${area}m²` : "- m²"}</span>
          <span className="flex items-center gap-1 min-w-[90px]">
            <FaBed className="inline-block mb-[2px]" />{" "}
            {bedrooms ? `${bedrooms} Quartos` : "Quartos"}
          </span>
          <span className="flex items-center gap-1 min-w-[110px]">
            <FaBath className="inline-block mb-[2px]" />{" "}
            {bathrooms ? `${bathrooms} Banheiros` : "Banheiros"}
          </span>
          <span className="flex items-center gap-1 min-w-[100px]">
            <FaCar className="inline-block mb-[2px]" />{" "}
            {garages ? `${garages} Garagem` : "Garagem"}
          </span>
        </div>
      </div>
      {/* Preço e botão */}
      <div className="flex flex-col justify-center items-end p-6 min-w-[160px]">
        <span className="text-orange-600 font-bold text-2xl mb-4">
          {price ? `R$ ${price}` : "R$"}
        </span>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-2 transition"
          onClick={onContact}
        >
          Contatar
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;



