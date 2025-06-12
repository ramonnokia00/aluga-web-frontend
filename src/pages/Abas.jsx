import React from "react";
import Img from "../assets/img-casa.png";
import Imgap from "../assets/img-apartamento.png";
import Botao from "../assets/botao+1.png";
import Numero from "../assets/numero+1.png";
import Botao3 from "../assets/botao3.png";
import IconeFiltro from "../assets/icone-filtro.png";
import IconeL from "../assets/icone-local.png";
import IconeFechar from "../assets/icone-fechar.png";
import BotaoC from "../assets/botao-comprar.png";
import BotaoA from "../assets/botao-alugar.png";
import NomeComp from "../assets/nome-comprar.png";
import NomeAlug from "../assets/nome-alugar.png";




const Abas = () => {
    return (
        <>
            <div>
                <div className="flex gap-3 w-[19px] h-[19px] mt-[126px] ml-[50px]">
                    <img src={IconeFiltro} alt="Icone" />
                    <p>Filtros</p>
                </div>
            </div>
            <div className='w-[394px] border border-black/15 rounded-tl-[12px] rounded-tr-[12px] overflow-hidden'>
                <div className="flex bg-black/15">
                    <div className="leading-[53px] flex-1">
                        <h1 className="text-center text-[#595959] font-semibold">Comprar</h1>
                    </div>
                    <div className="leading-[53px] flex-1">
                        <h1 className="text-center bg-[#E04300] text-white font-semibold">Alugar</h1>
                    </div>
                </div>

                <div className="py-[34px] px-[28px] border-b border-b-black/15">
                    <p className="text-[#595959]">Localização</p>
                    <div className="rounded-[8px] border border-gray-300 flex gap-5 items-center px-2 mt-[14px]">
                        <img src={IconeL} alt="" className="ml-[10px]" />
                        <input
                            type="text"
                            placeholder="Digite o bairro, rua ou cidade"
                            className="w-full outline-none h-[54px] rounded-[8px] radius-[8px]"
                        />
                    </div>
                    <div className="mt-[14px]">
                        <button className="bg-[#E04300] text-[12px] font-semibold text-white w-[134px] h-[35px] rounded-full hover:bg-laranja-70 cursor-pointer flex items-center justify-between px-[14px]">
                            Fortaleza - CE
                            <img src={IconeFechar} alt="" />
                        </button>
                    </div>
                </div>

                <div className="py-[34px] px-[28px] border-b border-b-black/15">
                    <p className="text-[#595959]">Tipos de Imóveis</p>
                    <div className="flex mt-[20px mt-[14px] gap-3 cursor-pointer">
                        <img src={Img} alt="Casa" className="hover:bg-laranja-70 duration-200 rounded-[8px]" />
                        <img src={Imgap} alt="Apartamento" className="hover:bg-laranja-70 duration-200 rounded-[8px]" />
                    </div>
                </div>

                <div className="py-[34px] px-[28px] border-b border-b-black/15">
                    <div className="flex gap-3">
                        <div>
                            <p className="text-[#595959] mb-[14px]">Preço à partir de</p>
                            <input type="text" placeholder="0" className="rounded bg-gray-100 5% radius-[8px] h-[54px] w-[158px] border border-black/15 focus:outline-laranja pl-[14px] cursor-pointer hover:bg-gray-50 duration-200" />
                        </div>

                        <div>
                            <p className="text-[#595959] mb-[14px]">Até</p>
                            <input type="text" placeholder="0" className="rounded bg-gray-100 15% radius-[8px] h-[54px] w-[169px] border border-black/15 focus:outline-laranja pl-[14px] cursor-pointer hover:bg-gray-50 duration-200" />

                        </div>
                    </div>
                </div>

                <div className="py-[34px] px-[28px] border-b border-b-black/15">
                    <p className="text-[#595959] mb-[14px]">Quantidade de Quartos</p>
                    <div className="flex gap-3">
                        <div className="bg-[#E04300] w-[72px] h-[54px] justify-center flex items-center rounded-lg text-white cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+1</p>
                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+2</p>
                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+3</p>

                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+4</p>
                        </div>
                    </div>
                </div>

                <div className="py-[34px] px-[28px] border-b border-b-black/15">
                    <p className="text-[#595959] mb-[14px]">Quantidade de Banheiros</p>
                    <div className="flex gap-3">
                        <div className="bg-[#E04300] w-[72px] h-[54px] justify-center flex items-center rounded-lg text-white cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+1</p>
                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+2</p>
                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+3</p>

                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+4</p>
                        </div>
                    </div>
                </div>

                <div className="py-[34px] px-[28px] border-b border-b-black/15">
                    <p className="text-[#595959] mb-[14px]">Quantidade de Garagens</p>
                    <div className="flex gap-3">
                        <div className="bg-[#E04300] w-[72px] h-[54px] justify-center flex items-center rounded-lg text-white cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+1</p>
                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+2</p>
                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+3</p>

                        </div>
                        <div className="bg-laranja-70 w-[72px] h-[54px] justify-center flex items-center rounded-lg text-laranja cursor-pointer hover:bg-laranja-70 duration-200">
                            <p>+4</p>
                        </div>
                    </div>
                </div>

                
            </div>







        </>
    );
}

export default Abas;
