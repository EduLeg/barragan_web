import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { IoPersonOutline, IoMailUnreadOutline, IoCreate, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
export default function Workwithus() {






    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tm3bmrd', 'template_c91vgt5', form.current, 'TbGs0j_6-ov0wy0ho')
            .then((result) => {
                console.log(result.text);
                console.log("Mensaje enviado");
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section className='section flex flex-col items-center gap-y-[30px]'>
            <a name="trabajo">
                <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#0000001a] drop-shadow-2xl'>

                    <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px] relative'>

                        <div className='flex-1' data-aos='fade-right' data-aos-offset='400'>
                            <div className='pretitle'>!Unete!</div>
                            <h2 className='title'>Trabaja con nosotros</h2>
                            <p className='lead text-black'>
                                Siempre estamos en la búsqueda de nuevos talentos y nos encantaría saber mas de ti, déjanos tus datos en el siguiente formulario y nosotros nos pondremos en contacto contigo, recuerda llenar todos los campos completamente y utilizar información verídica.
                            </p>
                        </div>

                        <div className='flex-1' data-aos='fade-left' data-aos-offset='300'>




                            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>


                                {/* nombre */}
                                <div class="relative mb-6">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                        <IoPersonOutline />
                                    </div>
                                    <input type="text" name="user_name" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Nombre" />
                                </div>


                                {/* APELLIDO */}
                                <div class="relative mb-6">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                        <IoPersonOutline />
                                    </div>
                                    <input type="text" name="user_lastname" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Apellidos" />
                                </div>
                                {/* EMAIL */}
                                <div class="relative mb-6">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                        <IoMailUnreadOutline />
                                    </div>
                                    <input type="email" name="user_email" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Email" />
                                </div>
                                {/* NUMBER */}
                                <div class="relative mb-6">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                        <IoMailUnreadOutline />
                                    </div>
                                    <input type="number" name="celphone" id="input-group-1" class="bg-[#ffffff12] border border-gray-600  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Telefono" />
                                </div>

                                <button type="submit" value="Send" className="h-[3rem] w-[5rem] flex justify-center items-center bg-[#ba2024] rounded-lg hover:bg-[#DC2E33] p-4">
                                    <p className="text-xl text-white text-center">Enviar</p>
                                </button>



                            </form>
                        </div>




                    </div>

                </div>
            </a>

        </section>
    );
};

