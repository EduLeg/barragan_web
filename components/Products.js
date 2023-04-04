import React from "react"
import Products_slider from "./Products_slider";
// import data
import { database_product } from "../pages/information";

export default function Products() {
    const { producst, typeof_product } = database_product;
    return (
        <section className='section '>
            <a name="productos">


                <div className='lg:h-full h-[56rem]'>
                    <div className='flex flex-col items-center lg:gap-y-[20px]  p-5 border-b-2 border-black/20'>
                        {/* text */}
                        <div className='flex-1  ' data-aos='fade-right' data-aos-offset='400'>
                            <div className='title text-center'>Productos Barragán</div>
                            <p className='lead text-black lg:text-right text-center'>Ofrecemos una amplia gama de productos alimenticios a precios justos buscando el bienestar y satisfacción de nuestros consumidores.</p>
                        </div>

                    </div>
                    <div>
                        <Products_slider producst={producst} typeof_product={typeof_product} />
                    </div>

                </div>
            </a>
        </section>
    );
};

