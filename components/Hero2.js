import React from "react"
// import icons

import { BsShop, BsShopWindow, BsThreeDotsVertical, BsArrowDown } from "react-icons/bs";
import { HiOutlineChevronDown, HiShoppingCart, HiTruck } from 'react-icons/hi'
import { hero } from "../pages/information";
import Image from 'next/image'



export default function Hero2() {
    const { image, image2, image3 } = hero;
    return (
        <section className="bg-fixed bg-center bg-cover bg-[#1146cf]">
            <div className='container flex items-center justify-center h-screen m-auto mb-3 pt-10 z[1]'>
                <div className="absolute inset-0 inline-flex items-center justify-center z-[2]">
                    <div className="absolute bottom-4 right-2">
                        <div className="h-[6rem] w-[12rem] flex flex-row">
                            <p className='text-[1rem] text-light rotate-[270deg] translate-x-[3.5rem]'>Scroll Down</p>
                            <div className="w-[4rem] h-[6rem]  rounded-full border-2 border-white flex items-center justify-center text-xl text-white">
                                <BsArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] inline-flex items-center justify-center z-[1]">
                    <div className="w-[8rem] h-[8rem] blur-3xl"></div>
                    <div className="w-[22rem] h-[17rem]  blur-3xl"></div>
                    <div className="">
                        <Image
                            className="relative"
                            src={image2}
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                    <div className="absolute top-1 -left-[6rem]">
                        <Image
                            className="relative"
                            src={image3}
                            alt="Next.js Logo"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>



                </div>


                <div className='flex flex-col lg:flex-row lg:items-stretch lg:gap-x-[20px] p-6 z-[4]'>


                    {/* text */}
                    <div className='flex-1 self-start' data-aos='fade-right' data-aos-offset='500'>

                        <h2 className='title font-mono text-white '>Elaborado con leche de alta calidad</h2>
                        <p className='lead text-light'>La preferida de los jaliscienses</p>
                        <div
                            className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
                            data-aos='fade-down'
                            data-aos-delay='700'
                        >
                        </div>
                    </div>
                    <div className='flex-1 relative self-center' data-aos='fade-left' data-aos-offset='500'>
                        <Image
                            className="relative"
                            src={image}
                            alt="Next.js Logo"
                            width={400}
                            height={400}
                            priority
                        />
                    </div>
                    <div className='self-center' data-aos='fade-right' data-aos-offset='500'>

                        <div className="relative bg-[#ffffff12] w-full  rounded-lg shadow-[#0000001a] drop-shadow-2xl p-3 mt-4">
                            <p className='lead text-white text-center font-bold'>Sucursales</p>
                            <div className="flex flex-col lg:gap-y-[6px] ">
                                <div className="w-[12rem] h-[3.5rem] rounded-lg bg-[#11101087] shadow-[#00000084] drop-shadow-2xl flex flex-row items-center p-2 gap-x-[6px] text-center ">
                                    <div className="h-full w-[3.5rem] bg-[#1146cf] rounded-lg flex items-center justify-center text-xl text-white">
                                        <BsShop />
                                    </div>
                                    <p className='mini_latter text-white text-center w-[7rem]'>Abastos</p>
                                    <div className="h-full w-[1rem] flex items-center justify-center text-xl text-white">
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <div className="w-[12rem] h-[3.5rem] rounded-lg bg-[#11101087] shadow-[#00000084] drop-shadow-2xl flex flex-row items-center p-2 gap-x-[6px]">
                                    <div className="h-full w-[3.5rem] bg-[#1146cf] rounded-lg flex items-center justify-center text-xl text-white">
                                        <BsShopWindow />
                                    </div>
                                    <p className='mini_latter text-white text-center w-[7rem]'>Huertas</p>
                                    <div className="h-full w-[1rem] flex items-center justify-center text-xl text-white">
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <div className="w-[12rem] h-[3.5rem] rounded-lg bg-[#11101087] shadow-[#00000084] drop-shadow-2xl flex flex-row items-center p-2 gap-x-[6px]">
                                    <div className="h-full w-[3.5rem] bg-[#1146cf] rounded-lg flex items-center justify-center text-xl text-white">
                                        <BsShop />
                                    </div>
                                    <p className='mini_latter text-white text-center w-[7rem]'>Felipe Angeles </p>
                                    <div className="h-full w-[1rem] flex items-center justify-center text-xl text-white">
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <div className="w-[12rem] h-[3.5rem] rounded-lg bg-[#11101087] shadow-[#00000084] drop-shadow-2xl flex flex-row items-center p-2 gap-x-[6px]">
                                    <div className=" h-full w-[3.5rem] bg-[#1146cf] rounded-lg flex items-center justify-center text-xl text-white">
                                        <BsShopWindow />
                                    </div>
                                    <p className='mini_latter text-white text-center w-[7rem]'>Santa Margarita</p>
                                    <div className="h-full w-[1rem] flex items-center justify-center text-xl text-white">
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

