import React from "react"
// import icons
import { HiOutlineChevronDown, HiShoppingCart, HiTruck } from 'react-icons/hi'
import { hero } from "../pages/information";
import Image from 'next/image'
import { BsArrowDown, BsShopWindow } from "react-icons/bs";
export default function Hero() {
    const { image } = hero;
    return (
        <section className="bg-fixed bg-center bg-cover custom-img w-screen relative">
            <div className="absolute inset-0 w-full z-[1]">
                <div className="absolute lg:bottom-4 lg:right-2 bottom-2 right-0 lg:visible invisible">
                    <div className="h-[6rem] w-[12rem] flex flex-row">
                        <p className='text-[1rem] text-light rotate-[270deg] translate-x-[3.5rem]'>Scroll Down</p>
                        <div className="w-[4rem] h-[6rem]  rounded-full border-2 border-white flex items-center justify-center text-xl text-white">
                            <BsArrowDown />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container flex items-center justify-center h-screen m-auto mb-3 pt-10 w-full relative'>





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

                    <div className='flex-1 text-center lg:text-left flex flex-col lg:items-start items-center' >

                        <h2 className='title text-white'>Donde más barato te dan</h2>
                        <p className='lead mb-3 text-black lg:text-white'>La preferida de los jaliscienses</p>
                        <div className="flex space-x-6 mb-6">
                            <a href=" https://www.facebook.com/profile.php?id=100090098234372" class="text-white hover:text-[#DC2E33]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://www.instagram.com/cremeriasbarragan/" class="text-white hover:text-gray-900 dark:hover:text-[#DC2E33]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="https://www.tiktok.com/@cremeriasbarragan?_t=8a1TKNA16e5&_r=1 " class="text-white hover:text-gray-900 dark:hover:text-[#DC2E33]">
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>tiktok</title> <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path> </g></svg>
                                <span className="sr-only">Twitter page</span>
                            </a>

                        </div>
                        <div
                            className='flex items-center justify-center lg:justify-start max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
                        >


                            <a href={'#shops'} className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                                Sucursales
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