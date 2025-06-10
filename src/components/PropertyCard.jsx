import casa from "../assets/imagemcasa.png"
const PropertyCard = () => (
  <div className="bg-white p-4 rounded-xl shadow flex gap-4">
    <img
      src={casa}
      alt="Casa"
      className="rounded-lg object-cover w-48 h-32"
    />
    <div className="flex-1">
      <h3 className="text-lg font-semibold">Rua Eduardo Bezerra, 1182</h3>
      <p className="text-sm text-gray-500">São João do Tauape, Fortaleza/CE</p>
      <p className="text-sm mt-1">Casa para alugar, 500m²</p>
      <p className="text-sm text-gray-600">Excelente Casa à venda ou Locação</p>
      <div className="flex gap-4 mt-2 text-sm text-gray-700">
        <span>500m²</span>
        <span>3 Quartos</span>
        <span>5 Garagens</span>
      </div>
    </div>
    <div className="text-right">
      <p className="text-red-500 text-xl font-bold">R$ 5.000</p>
      <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">Contatar</button>
    </div>
  </div>
);

export default PropertyCard;
