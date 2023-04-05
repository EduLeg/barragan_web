import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoPersonOutline, IoMailUnreadOutline, IoCreate, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
// https://www.youtube.com/watch?v=bMq2riFCF90
export default function Contact() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cqtu531', 'template_hcl8m63', form.current, 'LSIijb2YTFJWKLLBu')
            .then((result) => {
                console.log(result.text);
                console.log("Mensaje enviado");
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <section name="contacto" className='section flex flex-col items-center gap-y-[10px] '>
            <a name="contacto" className='w-full'>


                <h2 className='title text-center'>Contáctanos</h2>
                <div className='container mx-auto bg-[#ffffffa1] p-5 rounded-lg shadow-[#0000001a] drop-shadow-2xl'>
                    <div className='flex flex-col lg:flex-row lg:items-center justify-center lg:gap-x-[30px] '>
                        {/* text */}
                        <div className=' w-7/12' data-aos='fade-right' data-aos-offset='300'>
                            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                                {/* NAME */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                        <IoPersonOutline />
                                    </div>
                                    <input type="text" name="user_name" id="input-group-1" className="bg-[#ffffff12] border border-gray-800  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Name" />
                                </div>
                                {/* email */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                        <IoMailUnreadOutline />
                                    </div>
                                    <input type="email" name="user_email" id="input-group-1" className="bg-[#ffffff12] border border-gray-800  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Email" />
                                </div>
                                {/* SUBJECT */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black text-lg font-semibold">
                                        <IoCreate />
                                    </div>
                                    <input type="text" name="motivo" id="input-group-1" className="bg-[#ffffff12] border border-gray-800  text-sm rounded-lg  block w-full pl-10 p-2.5 text-black" placeholder="Subject" />
                                </div>

                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Mensaje</label>
                                <textarea id="message" name="message" rows="4" className="mb-6 block p-2.5 w-full text-sm text-black border-gray-600 bg-[#ffffff12] border " placeholder="Write your thoughts here..."></textarea>

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

