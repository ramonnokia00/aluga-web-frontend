import React from "react";
import Img from "../assets/img-casa.png";
import Imgap from "../assets/img-apartamento.png";
import Botao from "../assets/botao+1.png";
import Numero from "../assets/numero+1.png";
import Botao3 from "../assets/botao3.png";



const Abas = () => {
    return (
        <>
            <div className='flex w-[394px]'></div>
            <div className="w-[39px] h-[53px] flex items-center justify-center">
                <h1 className="text-center ml-[35px] mt-[95px]">Comprar</h1>
            </div>
            <div className="w-[394px] h-[53px] flex items-center justify-center">
                <h1 className="text-center">Alugar</h1>
            </div>
            <div className="w-[92px] h-[19px] flex items-center justify-center ml-[79px]">

                <p>Localização</p>
            </div>
            <div className="w-[338px] h-[54px] rounded-[8px] border border-gray-300 flex items-center px-2 ml-[79px]
            mt-[12px]">
                <input
                    type="text"
                    placeholder="Digite o bairro, rua ou cidade"
                    className="w-full outline-none ml-[79px] rounded-[8px]"
                />
            </div>

            <div className="ml-[79px] mt-[12px]">
                <button className="bg-[#E04300] text-white w-[134px] h-[35px] rounded-full">
                    Fortaleza - CE x
                </button>
            </div>

            <div>
                <p className="text-color #595959 lh-[100%] size-16px ml-[79px] mt-[12px]">Tipos de Imóveis</p>

                <div className=" flex mt-[20px ml-[79px] mt-[12px] gap-3">
                    <img src={Img} alt="Casa" />

                    <img src={Imgap} alt="Apartamento" />
                </div>

                <div className="ml-[79px] flex gap-3 mt-[12px]">
                    <div>

                        <p>Preço à partir de</p>
                        <input type="text" placeholder="0" className="rounded bg-[gray] 5% radius-[8px]" />
                    </div>

                    <div>
                        <p>Até</p>
                        <input type="text" placeholder="0" className="rounded bg-[gray] 15% radius-[8px]" />

                    </div>


                </div>
                
                <div className="ml-[79px] mt-[12px]">
                    <p>Quantidade de Quartos</p>
                </div>
                <div className="ml-[79px] flex gap-3">

                    <div className="bg-[#E04300] w-[72px] h-[54px] justify-center flex items-center rounded text-white">
                        <p>+1</p>
                    </div>

                    <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded text-laranja">
                        <p>+1</p>
                    </div>

                    <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded text-laranja">
                        <p>+1</p>

                    </div>
                    
                    <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded text-laranja">
                        <p>+1</p>
                    </div>



                </div>


            </div>







        </>
    );
}

export default Abas;
