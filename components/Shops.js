import React from "react"
import { BsShop, BsFillGeoAltFill } from "react-icons/bs";
import { HiChatAlt2, HiPhoneIncoming, HiUser, HiOutlineBadgeCheck, HiOutlineFingerPrint, HiOutlineHand } from "react-icons/hi";
import Googlemaps from "./Googlemaps";
export default function Shops() {
    return (
        <section className='section flex flex-col items-center justify-center gap-y-[30px] overflow-hidden'>
            <a name="shops" className='w-full '>


                <div className="lg:w-8/12 w-11/12 mx-auto flex flex-row flex-wrap items-center justify-center lg:gap-y-[0px] gap-y-[30px]">
                    <div className=" flex-1 btn flex space-x-6">
                        <HiChatAlt2 className="text-[3rem] text-light" />
                        <div>
                            <h1 className="text-[#888] tracking-wide font-light text-[1rem]">Horario de Atencion</h1>
                            <h1 className="text-[#888] tracking-wide font-light text-[0.8rem]">LUN A SAB: 5:00AM – 3PM</h1>
                        </div>
                    </div>
                    <div className=" flex-1 btn flex space-x-6">
                        <HiPhoneIncoming className="text-[3rem] text-light" />
                        <div>
                            <h1 className="text-[#888] tracking-wide font-light text-[1rem]">Tel. 3336430055</h1>
                            <h1 className="text-[#888] tracking-wide font-light text-[0.8rem]">LLAMA Y PIDE A DOMICILIO</h1>
                        </div>
                    </div>
                    <div className=" flex-1 btn flex space-x-6">
                        <HiUser className="text-[3rem] text-light" />
                        <div>
                            <h1 className="text-[#888] tracking-wide font-light text-[1rem]">Tel. 3311765951</h1>
                            <h1 className="text-[#888] tracking-wide font-light text-[0.8rem]">SERVICIO A CLIENTES</h1>
                        </div>
                    </div>


                </div>
                <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#0000001a] drop-shadow-2xl'>

                    <div className='flex flex-col lg:flex-row  lg:gap-x-[10px] relative'>

                        <div className='flex-1 flex flex-col items-stretch' data-aos='fade-left' data-aos-offset='300'>
                            <div className='pretitle text-left'>!Conocenos!</div>
                            <h2 className='title self-center'>Sucursales</h2>
                            <div className="h-[24rem] lg:w-[30rem] w-[24rem] self-center">
                                <Googlemaps />
                            </div>

                        </div>


                        <div className='flex-1 flex flex-col gap-y-[10px] p-6' data-aos='fade-right' data-aos-offset='400'>

                            <div className="w-full lg:h-[8rem] rounded-lg bg-[#ba2024] shadow-[#00000084] drop-shadow-2xl flex flex-col p-3   overflow-hidden">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -bottom-[3rem] h-[10rem] w-[10rem] rotate-45  bg-[#7a15189a]"></div>
                                    <div className="absolute -bottom-[5rem] h-[10rem] w-[10rem] rotate-45 bg-[#D12329] "></div>
                                    <div className="absolute bottom-[0rem] right-[0rem] h-[2.5rem] w-[2.5rem] text-xl text-white z-[4]">
                                        <BsShop />
                                    </div>
                                </div>

                                <p className='mini_latter text-white font-bold  z-[2]'>Santa Margarita</p>
                                <p className=' text-white text-[0.9rem]  z-[2]'>  45140, Av. Sta. Margarita 137A, Santa Margarita 1a Secc., Zapopan, Jal.</p>
                                <p className=' text-white text-[0.9rem]  z-[2]'>Horario: 7:00am- 4:00pm Teléfono: 3320155466 </p>


                            </div>
                            <div className="w-full h-[8rem] rounded-lg bg-[#AE1E22] shadow-[#00000084] drop-shadow-2xl flex flex-col p-3   overflow-hidden">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -top-[3rem] h-[10rem] w-[10rem] rotate-45  bg-[#7a15189a]"></div>
                                    <div className="absolute -top-[5rem] h-[10rem] w-[10rem] rotate-45 bg-[#D12329] "></div>
                                    <div className="absolute bottom-[0rem] right-[0rem] h-[2.5rem] w-[2.5rem] text-xl text-white z-[4]">
                                        <BsShop />
                                    </div>
                                </div>

                                <p className='mini_latter text-white font-bold  z-[2]'>Abastos</p>
                                <p className=' text-white text-[0.9rem]  z-[2]'> Mercado de abastos, C. 15, 45080 Guadalajara, Jal.</p>
                                <p className=' text-white text-[0.9rem]  z-[2] lg:w-[29rem]'>Horario: Lunes a viernes de 6:00 a 4:00. Sábados 6:00 a 3:00 .Domingos 6:00 a 2:00 Teléfono: 3320155466</p>


                            </div>
                            <div className="w-full h-[8rem] rounded-lg bg-[#8C181C] shadow-[#00000084] drop-shadow-2xl flex flex-col p-3   overflow-hidden">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -bottom-[8rem] right-0 h-[15rem] w-[15rem] rounded-full bg-[#DC2E33] z-[1]"></div>
                                    <div className="absolute -bottom-[3rem] h-[6rem] w-[6rem] rounded-full bg-[#ba2024] z-[4]"></div>
                                    <div className="absolute bottom-[0rem] right-[0rem] h-[2.5rem] w-[2.5rem] text-xl text-white z-[4]">
                                        <BsShop />
                                    </div>
                                </div>
                                <p className='mini_latter text-white font-bold  z-[2]'>Huertas</p>
                                <p className=' text-white text-[0.9rem]  z-[2]'>  Huertas 685, Jardines de Guadalupe, 44740 Guadalajara, Jal.</p>
                                <p className=' text-white text-[0.9rem]  z-[2]'>Horario:  5:00 am - 3:00pm Teléfono: 3340406374 </p>

                            </div>
                            <div className="w-full h-[8rem] rounded-lg bg-[#570F11] shadow-[#00000084] drop-shadow-2xl flex flex-col p-3   overflow-hidden">
                                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                                    <div className="absolute -top-[8rem] right-0 h-[15rem] w-[15rem] rounded-full bg-[#DC2E33] z-[1]"></div>
                                    <div className="absolute -top-[3rem] h-[6rem] w-[6rem] rounded-full bg-[#ba2024] z-[4]"></div>
                                    <div className="absolute bottom-[0rem] right-[0rem] h-[2.5rem] w-[2.5rem] text-xl text-white z-[4]">
                                        <BsShop />
                                    </div>
                                </div>

                                <p className='mini_latter text-white font-bold  z-[2]'>Felipe Angeles </p>
                                <p className=' text-white text-[0.9rem]  z-[2]'>Calle Felipe Angeles 472, Jardines de Guadalupe, 44740 Guadalajara, Jal.</p>
                                <p className=' text-white text-[0.9rem]  z-[2]'>Horario:  5:00 am - 3:00pm Teléfono: 3336430055 </p>

                            </div>



                        </div>

                    </div>

                </div>
            </a>

        </section>
    )
};

