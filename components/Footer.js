import React from "react"
import Image from 'next/image'
import { header } from "../pages/information";
export default function Footer() {
    const { image } = header;
    return (
        <footer class="bg-white rounded-lg shadow m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex items-center mb-4 sm:mb-0">
                        <Image
                            className="relative"
                            src={image}
                            alt="Next.js Logo"
                            width={100}
                            height={100}
                            priority
                        />
                    </div>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Productos</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contacto</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center">© 2023 <a class="hover:underline">Cremerias barragan</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
};

