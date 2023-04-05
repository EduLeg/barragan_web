import React from "react"
import Image from 'next/image'
import { aboutus } from "../pages/information";
import { HiChatAlt2, HiPhoneIncoming, HiUser, HiOutlineBadgeCheck, HiOutlineFingerPrint, HiOutlineHand } from "react-icons/hi";

export default function Aboutus() {
    const { image } = aboutus;
    return (

        <section className='section flex flex-col items-center gap-y-[30px] overflow-hidden'>
            <a name="nostros">


                <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#000] drop-shadow-2xl'>

                    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] '>
                        {/* text */}
                        <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
                            <div className='pretitle'>100% Mexicana</div>
                            <h2 className='title'>¿Quiénes somos?</h2>
                            <p className='lead text-black'>Somos un negocio familiar fundado en 2006  dedicado a la venta de productos como jamones, quesos y salchichas. Con el tiempo, la empresa ha abierto nuevas sucursales y ha aumentado el número de empleados. Además de vender productos de calidad, nos preocupamos por contribuir a la economía de las familias.</p>

                        </div>
                        {/* image */}
                        <div className='flex-1 relative p-6' data-aos='fade-left' data-aos-offset='300'>
                            <div className="flex flex-col  h-11/12 w-11/12">
                                <div className="flex flex-col mb-4">
                                    <div className="h-full w-[3.5rem] rounded-lg bg-[#ba2024]  flex items-center justify-center text-xl">
                                        <HiOutlineBadgeCheck className="text-[3rem] text-white" />
                                    </div>
                                    <p className='text-2xl lg:text-4xl mb-3 font-bold text-black'>Misión</p>
                                    <p>Producir, comercializar y distribuir alimentos al mayoreo y menudeo de primera calidad. Con el compromiso de satisfacer las necesidades de nuestros clientes y las de sus familias con el mejor servicio y atención</p>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="h-full w-[3.5rem] rounded-lg bg-[#ba2024]  flex items-center justify-center text-xl">
                                        <HiOutlineFingerPrint className="text-[3rem] text-white" />
                                    </div>
                                    <p className='text-2xl lg:text-4xl mb-3 font-bold text-black'>Visión</p>
                                    <p>Ser la cremería referente de Jalisco por su calidad y compromiso en la satisfacción del cliente. Ser reconocidos como uno de los  mejores lugares para trabajar, transmitiendo a nuestro personal y clientes la tradición y valores de la familia Barragán.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="flex flex-col mb-4">
                            <div className="h-full w-[3.5rem] rounded-lg bg-[#ba2024]  flex items-center justify-center text-xl">
                                <HiOutlineHand className="text-[3rem] text-white" />
                            </div>
                            <p className='text-2xl lg:text-4xl mb-3 font-bold text-black'>Valores</p>

                        </div>

                        <div className="flex lg:flex-row flex-col lg:gap-x-[20px] gap-y-[10px] flex-wrap items-center justify-between">

                            <div className="flex-1 h-[20rem] rounded-lg bg-[#ba2024] shadow-[#00000084] drop-shadow-2xl flex flex-col p-2 overflow-hidden relative">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -bottom-[6rem] h-[15rem] w-[15rem] rounded-full bg-[#DC2E33] z-[1]"></div>
                                    <div className="absolute -bottom-[3rem] h-[6rem] w-[6rem] rounded-full bg-[#ba2024] z-[4]"></div>
                                </div>
                                <div className="z-[2]">
                                    <p className='text-2xl mb-3 font-bold text-white'>Ética</p>
                                    <p className="text-white text-[1rem]">Enfocamos cada acción en el bienestar de nuestra comunidad y entorno para maximizar nuestro aporte a la vida de cada persona.</p>
                                </div>
                            </div>


                            <div className="flex-1 h-[20rem] rounded-lg bg-[#AE1E22] shadow-[#00000084] drop-shadow-2xl flex flex-col p-2 gap-x-[6px] overflow-hidden relative">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -right-[5rem] h-[15rem] w-[15rem] rounded-full bg-[#DC2E33] z-[1]"></div>
                                    <div className="absolute -left-[5rem] h-[15rem] w-[15rem] rounded-full bg-[#7a15189a] z-[4]"></div>
                                </div>
                                <div className="z-[2]">
                                    <p className='text-2xl mb-3 font-bold text-white'>Tradición familiar</p>
                                    <p className="text-white text-[1rem]">Transmitimos los valores y principios de la familia Barragán a través de nuestro personal y nuestros productos</p>
                                </div>


                            </div>
                            <div className="flex-1 h-[20rem] rounded-lg bg-[#8C181C] shadow-[#00000084] drop-shadow-2xl flex flex-col p-2 gap-x-[6px] overflow-hidden relative">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -bottom-[3rem] h-[10rem] w-[10rem] rotate-45  bg-[#7a15189a] z-[1]"></div>
                                    <div className="absolute -bottom-[5rem] h-[10rem] w-[10rem] rotate-45 bg-[#D12329] z-[4]"></div>
                                </div>
                                <div className="z-[2]">
                                    <p className='text-2xl mb-3 font-bold text-white'>Trabajamos en colaboración</p>
                                    <p className="text-white text-[1rem]">Colaboramos y sumamos esfuerzos para formar una sinergia que nos convierte en una familia.</p>
                                </div>
                            </div>
                            <div className="flex-1 h-[20rem] rounded-lg bg-[#570F11] shadow-[#00000084] drop-shadow-2xl flex flex-col p-2 gap-x-[6px] overflow-hidden relative">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute left-[0rem] h-[10rem] w-[10rem] rounded-full bg-[#DC2E33] z-[1]"></div>
                                    <div className="absolute right-[0rem] bottom-[0rem] h-[5rem] w-[5rem] rounded-full bg-[#7a15189a] z-[4]"></div>
                                </div>
                                <div className="z-[2]">
                                    <p className='text-2xl mb-3 font-bold text-white'>Construimos confianza</p>
                                    <p className="text-white text-[1rem]">Cultivamos relaciones con integridad y confianza tanto con nuestros empleados como con nuestros accionistas y grupos de interés.</p>
                                </div>

                            </div>
                            <div className="flex-1 h-[20rem] rounded-lg bg-[#1E0B0B] shadow-[#00000084] drop-shadow-2xl flex flex-col p-2 gap-x-[6px] overflow-hidden relative">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -top-[2rem] -left-[2rem] h-[10rem] w-[10rem]  bg-[#3C1616] z-[1]"></div>
                                    <div className="absolute right-[0rem] bottom-[0rem] h-[5rem] w-[5rem] bg-[#602323] z-[4]"></div>
                                </div>
                                <div className="z-[2]">
                                    <p className='text-2xl mb-3 font-bold text-white'>Comercio justo</p>
                                    <p className="text-white text-[1rem]">Ofrecemos los productos a precios de acuerdo a sus calidades cuidando siempre a las familias jaliscienses de ofrecer todo a precios justos. </p>
                                </div>

                            </div>

                        </div>

                    </div>



                </div>
            </a>

        </section>
    );
};

