
const Abas = () => {
    return (
        <>

            <div className='bg-white flex w-[394px]'>
                <div className="bg-laranja w-[39px] h-[53px]">
                    <h1 className="text-black">Comprar</h1>
                </div>

                <div className="bg-laranja w-[394px] h-[53px]">
                    <h1>Alugar</h1>
                </div>
                <div className="w-[92px] h-[19px]">
                    <p>Localização</p>
                </div>
                <div className="w-[338px] h-[54px] rounded 8px">
                    <input type="text" placeholder="Digite o bairro, rua ou cidade" />
                </div>
            </div>
        </>
    );
}

export default Abas;