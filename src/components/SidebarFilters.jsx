import React, { useState } from 'react';

const SidebarFilters = () => {
  const [tipo, setTipo] = useState('Alugar');
  const [quartos, setQuartos] = useState(null);
  const [banheiros, setBanheiros] = useState(null);
  const [garagens, setGaragens] = useState(null);

  const opcoes = [1, 2, 3, 4, '+4'];

  const renderGrupoBotoes = (label, selecionado, setSelecionado) => (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <div className="flex flex-wrap gap-2">
        {opcoes.map((item) => (
          <button
            key={item}
            onClick={() => setSelecionado(item)}
            className={`px-3 py-1 text-sm rounded border ${
              selecionado === item
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-orange-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="p-4 border rounded w-full max-w-xs">
      {/* Botões de Tipo */}
      <div className="flex space-x-2 mb-6">
        {['Comprar', 'Alugar'].map((item) => (
          <button
            key={item}
            onClick={() => setTipo(item)}
            className={`flex-1 py-2 rounded font-semibold border ${
              tipo === item
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-orange-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Quartos */}
      {renderGrupoBotoes('Quantidade de quartos', quartos, setQuartos)}

      {/* Banheiros */}
      {renderGrupoBotoes('Banheiros', banheiros, setBanheiros)}

      {/* Garagens */}
      {renderGrupoBotoes('Garagens', garagens, setGaragens)}
    </aside>
  );
};

export default SidebarFilters;
