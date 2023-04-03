import React from "react"

export default function MobileNav() {
    return (
        <div className='bg-white w-full h-full'>
            <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
                <li>
                    <a className='hover:text-[#ba2024] transition' href={'#nostros'}>
                        Nosotros
                    </a>
                </li>
                <li>
                    <a className='hover:text-[#ba2024] transition' href={'#productos'}>
                        Productos
                    </a>
                </li>
                <li>
                    <a className='hover:text-[#ba2024] transition' href={'#trabajo'}>
                        Trabaja con nosotros
                    </a>
                </li>
                <li>
                    <a className='hover:text-[#ba2024] transition' href={'#contacto'}>
                        Contacto
                    </a>
                </li>
            </ul>
        </div>
    );
};

