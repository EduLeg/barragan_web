import React from "react"

export default function MobileNav() {
    return (
        <div className='bg-[#ba2024] w-full h-full'>
            <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
                <li>
                    <a className='hover:text-white transition text-black' href={'#nostros'}>
                        Nosotros
                    </a>
                </li>
                <li>
                    <a className='hover:text-white transition text-black' href={'#productos'}>
                        Productos
                    </a>
                </li>
                <li>
                    <a className='hover:text-white transition text-black' href={'#trabajo'}>
                        Trabaja con nosotros
                    </a>
                </li>
                <li>
                    <a className='hover:text-white transition text-black' href={'#contacto'}>
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    );
};

