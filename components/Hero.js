import React from "react"
// import icons
import { HiOutlineChevronDown, HiShoppingCart, HiTruck } from 'react-icons/hi'
import { hero } from "../pages/information";
import Image from 'next/image'
import { BsArrowDown, BsShopWindow } from "react-icons/bs";
export default function Hero() {
    const { image } = hero;
    return (
        <section className="bg-fixed bg-center bg-cover custom-img w-screen">
            <div className='container flex items-center justify-center h-screen m-auto mb-3 pt-10 w-full relative'>

                <div className="absolute inset-0 inline-flex items-center justify-center z-[1]">
                    <div className="absolute lg:bottom-4 lg:right-2 bottom-2 right-0 lg:visible invisible">
                        <div className="h-[6rem] w-[12rem] flex flex-row">
                            <p className='text-[1rem] text-light rotate-[270deg] translate-x-[3.5rem]'>Scroll Down</p>
                            <div className="w-[4rem] h-[6rem]  rounded-full border-2 border-white flex items-center justify-center text-xl text-white">
                                <BsArrowDown />
                            </div>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col lg:flex-row items-center lg:gap-x-[30px] p-6 z-[2]'>

                    <div className='flex-1'>
                        <Image
                            className="relative lg:w-[28rem] lg:h-[23rem] w-[19rem] h-[15rem]"
                            src={image}
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                    {/* text */}
                    <div className='flex-1 text-center lg:text-left' >

                        <h2 className='title text-white'>Donde más barato te dan</h2>
                        <p className='lead text-light'>La preferida de los jaliscienses</p>
                        <div
                            className='flex items-center justify-center lg:justify-start max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
                        >


                            <a href={'#shops'} className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                                sucursales
                                <BsShopWindow />
                            </a>
                            <a href={'#contacto'} className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                                Contacto
                                <HiTruck />
                            </a>



                            {/* <button className="w-[12rem] h-[3.5rem] rounded-lg bg-[#11101087] shadow-[#00000084] drop-shadow-2xl flex flex-row items-center p-2 gap-x-[6px]">
                                <div className="h-full w-[3.5rem] bg-[#ba2024] hover:bg-[#a1171b] rounded-lg flex items-center justify-center text-xl text-white">
                                    <BsShopWindow />
                                </div>
                                <p className='mini_latter text-white text-center w-[7rem]'>sucursales</p>

                            </button>
                            <button className="w-[12rem] h-[3.5rem] rounded-lg bg-[#11101087] shadow-[#00000084] drop-shadow-2xl flex flex-row items-center p-2 gap-x-[6px]">
                                <div className="h-full w-[3.5rem] bg-[#ba2024] hover:bg-[#a1171b] rounded-lg flex items-center justify-center text-xl text-white">
                                    <HiTruck />
                                </div>
                                <p className='mini_latter text-white text-center w-[7rem]'>Contacto</p>

                            </button> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};


{/* <div className='pt-12 flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center '>

    <div className='flex-1 flex justify-center items-center flex-col'>


        <div className="mb-2 lg:mb-5" data-aos='fade-down' data-aos-delay='600'>
            <Image
                className="relative"
                src={image}
                alt="Next.js Logo"
                width={500}
                height={500}
                priority
            />
        </div>
        <p
            className='lead mb-5 lg:mb-5'
            data-aos='fade-down'
            data-aos-delay='600'
        >
            Elaborado con leche de alta calidad
        </p>

        <div
            className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
            data-aos='fade-down'
            data-aos-delay='700'
        >
            <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                sucursales
                <HiShoppingCart />
            </button>
            <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                Contacto
                <HiTruck />
            </button>
        </div>
    </div>

</div> */}