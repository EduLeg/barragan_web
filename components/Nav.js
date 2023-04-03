import React from "react"

export default function Nav() {
    return (
        <nav>
            <ul className='flex gap-x-10'>
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
        </nav>
    );
};

