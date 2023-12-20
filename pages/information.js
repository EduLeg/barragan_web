import React from "react"

export default function information() {
    return (
        <div>

        </div>
    )
};





// import images
import LogoImg from '../public/logo.png'
import Logo_barragan from '../public/logo_barragan.png'
import aboutus_img from '../public/aboutus.jpg'
import gota_leche from '../public/gota_leche.png'
import gota_leche2 from '../public/gota_leche2.png'

import id16 from '../public/Crema_Especial.png'
import id17 from '../public/Crema_Frida.png'
import id18 from '../public/Crema_Barragan.png'
import id19 from '../public/Queso_Gouda_B.png'
import id21 from '../public/Queso_Gouda_S.png'
import id23 from '../public/Queso_Panela.png'
import id24 from '../public/Queso_Cotija_seco_&_fresco.png'
import id27 from '../public/Queso_Chihuahua.png'
import id30 from '../public/Queso_tipo_Americano.png'
import id34 from '../public/Catsup_Stephania.png'

import id35 from '../public/Jamon_Americano-2.jpg'
import id38 from '../public/Catsup.jpg'
import id39 from '../public/Chiles_G.jpg'
import id40 from '../public/Cocido.jpg'
import id36 from '../public/Holandes.jpg'
import id42 from '../public/Jamon_cocido_largo.jpg'
import id43 from '../public/Jamon_de_pavo.jpg'
import id44 from '../public/Jamon_de_pierna.jpg'
import id45 from '../public/Leche_condensada.jpg'
import id46 from '../public/Manchego.jpg'
import id47 from '../public/Manteca.jpg'
import id48 from '../public/Mermelada_de_fresa.jpg'
import id49 from '../public/Mozarella.jpg'
import id50 from '../public/Oaxaca_Queso.jpg'
import id52 from '../public/Queso_adobera_para_fundir.jpg'
import id53 from '../public/Queso_de_mesa.jpg'
import id54 from '../public/Queso_Pizzero.jpg'
import id55 from '../public/Salchicha_de_pavo_roja.jpg'
import id57 from '../public/Salchicha_Frank.jpg'
import id58 from '../public/Salchicha_Premmium.jpg'
import id59 from '../public/Salchicha_Viena.jpg'
import id60 from '../public/york.jpg'










export const header = {
    image: Logo_barragan,
};

export const aboutus = {
    image: aboutus_img,
};

// data
export const hero = {
    image: LogoImg,
    image2: gota_leche,
    image3: gota_leche2,
};


export const database_product = {
    typeof_product: [
        {
            name: 'Todos',
        },
        {
            name: 'Jamones',
        },
        {
            name: 'Salchichas',
        },
        {
            name: 'Crema',
        },
        {
            name: 'Queso',
        },
        {
            name: 'Otros',
        },

    ],
    producst: [
        {
            id: '1',
            category: 'Jamones',
            image: id44,
            name: 'Jamón pierna supremo',
            prise: '12.23',
        },
        {
            id: '3',
            category: 'Jamones',
            image: id36,
            name: 'Jamón pierna holandés',
            prise: '12.56',
        },
        {
            id: '4',
            category: 'Jamones',
            image: id60,
            name: 'Jamón York Stephania',
            prise: '12.23',
        },
        {
            id: '5',
            category: 'Jamones',
            image: id43,
            name: 'Jamón de pavo Stephania',
            prise: '12.23',
        },
        {
            id: '6',
            category: 'Jamones',
            image: id35,
            name: 'Jamón Americano Stephania',
            prise: '12.23',
        },
        {
            id: '7',
            category: 'Jamones',
            image: id40,
            name: 'Jamón cocido cuadrado Stephania',
            prise: '12.23',
        },
        {
            id: '8',
            category: 'Jamones',
            image: id42,
            name: 'Jamón cocido redondo Stephania',
            prise: '12.23',
        },
        {
            id: '9',
            category: 'Salchichas',
            image: id58,
            name: 'Salchicha de pavo Premium Stephania',
            prise: '12.23',
        },
        {
            id: '10',
            category: 'Salchichas',
            image: id57,
            name: 'Salchicha de pavo Frankfurt Stephania',
            prise: '12.23',
        },
        {
            id: '11',
            category: 'Salchichas',
            image: id55,
            name: 'Salchicha de pavo Stephania',
            prise: '12.23',
        },
        {
            id: '15',
            category: 'Salchichas',
            image: id59,
            name: 'Salchicha Viena Stephania',
            prise: '12.23',
        },
        {
            id: '16',
            category: 'Crema',
            image: id16,
            name: 'Crema Especial',
            prise: '12.23',
        },
        {
            id: '17',
            category: 'Crema',
            image: id17,
            name: 'Crema Frida',
            prise: '12.23',
        },
        {
            id: '18',
            category: 'Crema',
            image: id18,
            name: 'Crema Barragan',
            prise: '12.23',
        },
        {
            id: '19',
            category: 'Queso',
            image: id19,
            name: 'Queso Gouda Barragan',
            prise: '12.23',
        },
        {
            id: '20',
            category: 'Queso',
            image: id46,
            name: 'Queso Manchego Barragan',
            prise: '12.23',
        },
        {
            id: '21',
            category: 'Queso',
            image: id21,
            name: 'Queso Gouda Stephania',
            prise: '12.23',
        },
        {
            id: '22',
            category: 'Queso',
            image: id54,
            name: 'Queso Pizzero doble queso',
            prise: '12.23',
        },
        {
            id: '23',
            category: 'Queso',
            image: id23,
            name: 'Queso Panela',
            prise: '12.23',
        },
        {
            id: '24',
            category: 'Queso',
            image: id24,
            name: 'Queso Cotija seco & fresco',
            prise: '12.23',
        },
        {
            id: '25',
            category: 'Queso',
            image: id52,
            name: 'Queso Adoberas para fundir',
            prise: '12.23',
        },
        {
            id: '26',
            category: 'Queso',
            image: id50,
            name: 'Queso Oaxaca',
            prise: '12.23',
        },
        {
            id: '27',
            category: 'Queso',
            image: id27,
            name: 'Queso Chihuahua',
            prise: '12.23',
        },
        {
            id: '28',
            category: 'Queso',
            image: id53,
            name: 'Queso de mesa fresco',
            prise: '12.23',
        },
        {
            id: '29',
            category: 'Queso',
            image: id49,
            name: 'Queso Mozzarella',
            prise: '12.23',
        },
        {
            id: '30',
            category: 'Queso',
            image: id30,
            name: 'Queso tipo Americano',
            prise: '12.23',
        },
        {
            id: '32',
            category: 'Otros',
            image: id47,
            name: 'Manteca Natural',
            prise: '12.23',
        },
        {
            id: '33',
            category: 'Otros',
            image: id38,
            name: 'Catsup Barragán',
            prise: '12.23',
        },
        {
            id: '34',
            category: 'Otros',
            image: id34,
            name: 'Catsup Stephania',
            prise: '12.23',
        },
        {
            id: '35',
            category: 'Otros',
            image: id45,
            name: 'Leche Condensada',
            prise: '12.23',
        },
        {
            id: '12',
            category: 'Otros',
            image: id39,
            name: 'Chiles Güeros',
            prise: '12.23',
        },
        {
            id: '13',
            category: 'Otros',
            image: id48,
            name: 'Mermelada de Fresa',
            prise: '12.23',
        },

    ],
};