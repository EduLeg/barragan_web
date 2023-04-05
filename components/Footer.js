import React from "react"
import Image from 'next/image'
import { header } from "../pages/information";
export default function Footer() {
    const { image } = header;
    return (
        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <Image
                            className="relative"
                            src={image}
                            alt="Next.js Logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Productos</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contacto</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2023 <a className="hover:underline">Cremerias Barragán</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
};

