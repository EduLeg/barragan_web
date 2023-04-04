import React, { useState, useEffect } from "react"
import Image from 'next/image'
import { MdStore } from "react-icons/md";
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import { HiOutlineArrowRight } from "react-icons/hi";



const Products_slider = ({ producst, typeof_product }) => {
    const [item, setItem] = useState({ name: 'todos' });
    const [product, setProduct] = useState([]);
    const [active, setActive] = useState([]);


    useEffect(() => {
        if (item.name === 'todos') {
            setProduct(producst)
        } else {
            const newProduct = producst.filter((producst_2) => {
                return producst_2.category.toLowerCase() === item.name;
            })
            setProduct(newProduct);
            console.log(producst.category)
            console.log(item.name)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index);

    }

    // console.log(item)
    // console.log(product)


    return (

        <>

            <div className="h-[25rem]">
                <div className="absolute lg:h-[23rem] lg:visible invisible w-full">
                    <div className="absolute bottom-0 right-[1rem]">
                        <div className="text-[2rem] text-black  ">
                            <HiOutlineArrowRight />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] p-5  items-center justify-center'>
                    <div className='basis-3/12 h-[15rem]  lg:border-r-2 lg:border-black/20' data-aos='fade-right' data-aos-offset='400'>
                        <nav className="lg:pt-6">
                            <ul className="flex flex-wrap gap-x-[30px] gap-y-[30px] items-center justify-center text-black ">
                                {typeof_product.map((item, index) => {
                                    return <li onClick={(e) => { handleClick(e, index) }} className={`${active == index ? 'active' : ''} cursor-pointer capitalize rounded-full border-2 border-gray-400 px-5 py-2.5 text-center `} key={index}>{item.name}</li>
                                }
                                )}

                            </ul>
                        </nav>
                    </div>
                    <div className='bg-red h-[12rem] w-[50rem] basis-9/12 '>


                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            grabCursor={true}
                            loop={false}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                },
                                1170: {
                                    slidesPerView: 3,
                                    spaceBetween: 4,
                                },
                            }}

                        >
                            {product.map((product, index) => {
                                // destructure client
                                const { category, image, name, prise } = product;
                                // slide
                                return (
                                    <SwiperSlide
                                        key={index}
                                    >
                                        {/* card */}
                                        <div className='w-full mx-auto lg:max-w-[300px] xl:max-w-[350px] h-[20rem] overflow-hidden relative  flex flex-col'>
                                            <div className="basis-4/5 w-full bg-slate-50 overflow-hidden">
                                                <Image
                                                    className="relative h-[17.5rem] w-full"
                                                    src={image}
                                                    layout="fill"
                                                    objectFit="contain"
                                                    alt="Next.js Logo"
                                                    priority
                                                />

                                            </div>
                                            <div className="basis-1/5 w-full ">
                                                <p className="text-black text-[1rem] w-[12rem]">{name}</p>
                                            </div>


                                        </div>


                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>



            </div>

        </>
    );
};

export default Products_slider


    // < h1 className = "relative text-white" > { name }</ >
    // <div className="border-t-2 border-white/60 w-[12rem] h-[2rem] flex items-center flex-row relative">
    //     <div class="flex flex-1 items-center">
    //         <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    //         <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    //         <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    //         <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    //         <svg aria-hidden="true" class="w-5 h-5 text-gray-300 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    //         <p class="ml-2 text-sm font-medium text-white">4.95</p>
    //     </div>
    //     <div className="w-[0.1rem] h-[1.2rem] bg-white/60">

    //     </div>
    //     <p class="ml-2 text-sm font-medium text-white">300 g</p>
    // </div>
    // <div className="border-t-2 border-white/60 w-[12rem] h-[2rem] flex items-center flex-row">
    //     <div class="flex flex-1 items-center">
    //         <MdStore className="text-white" />
    //         <p class="ml-2 text-sm font-medium text-white">San jose 2345 calle 2</p>
    //     </div>
    // </div>
    // <div className="border-t-2 border-white/60 w-[12rem] h-[2rem] flex items-center flex-row">
    //     <p class="ml-2 text-sm font-medium text-white">$ {prise}</p>

    // </div>


    // < div className = 'mb-[30px]' > { category }</div >

    //     <div className='flex gap-x-[10px]'>
    //         <img src={image} alt='' />
    //         <div className='font-bold'>{name}</div>
    //         <div className='text-light'>{prise}</div>
    //     </div>


    // < div className = "absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50" >
    //     <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-10%] h-[110%] w-full skew-y-[-18deg]  fill-white/40 stroke-white/25">
    //         <defs>
    //             <pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
    //                 <path d="M.5 56V.5H72" fill="none"></path>
    //             </pattern>
    //         </defs>
    //         <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R56hd6:)"></rect>
    //         <svg x="50%" y="16" class="overflow-visible">
    //             <rect strokeWidth="0" width="73" height="57" x="0" y="56"></rect>
    //             <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
    //             <rect strokeWidth="0" width="73" height="57" x="-200" y="500"></rect>
    //             <rect strokeWidth="0" width="73" height="57" x="-450" y="650"></rect>
    //         </svg>
    //     </svg>
    //                             </div >