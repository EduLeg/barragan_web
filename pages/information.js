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
import img_p1 from '../public/producto2_png.png'
import img_p2 from '../public/producto3.png'
import gota_leche from '../public/gota_leche.png'
import gota_leche2 from '../public/gota_leche2.png'

import id1 from '../public/Jamón_de_pierna_supremo_Barragán .png'
import id2 from '../public/Jamón de pierna_Barragán.png'
import id3 from '../public/Jamón_de_pierna_holandés_Stephania.png'
import id4 from '../public/Jamón de pierna_Barragán.png'
import id5 from '../public/Jamón _de_pavo_s.png'
import id6 from '../public/Jamón_Americano_s.png'
import id7 from '../public/Jamón_cocido_cuadrado.png'
import id8 from '../public/Jamón_cocido .png'
import id9 from '../public/Salchicha_de_pavo_Premium_Stephania.png'
import id10 from '../public/Salchicha_de_pavo_Frankfurt_Stephania.png'
import id11 from '../public/Salchicha_de_pavo_Stephania.png'
import id12 from '../public/Salchicha_de_pavo_delgada_Stephania.png'
import id13 from '../public/Salchicha_de_pavo_Stephania_mini.png'
import id14 from '../public/Salchicha_Viena_Stephania_2.5_kg.png'
import id15 from '../public/Salchicha_Viena_Stephania.png'
import id16 from '../public/Crema_Especial.png'
import id17 from '../public/Crema_Frida.png'
import id18 from '../public/Crema_Barragan.png'
import id19 from '../public/Queso_Gouda_B.png'
import id20 from '../public/Queso_Manchego_B.png'
import id21 from '../public/Queso_Gouda_S.png'
import id22 from '../public/Queso_Pizzero.png'
import id23 from '../public/Queso_Panela.png'
import id24 from '../public/Queso_Cotija_seco_&_fresco.png'
import id25 from '../public/Queso_Chihuahua.png'
import id26 from '../public/Queso_Oaxaca.png'
import id27 from '../public/Queso_Chihuahua.png'
import id28 from '../public/Queso_de_mesa_fresco.png'
import id29 from '../public/Queso_Mozzarella.png'
import id30 from '../public/Queso_tipo_Americano.png'
import id32 from '../public/Manteca_Natural.png'
import id33 from '../public/Catsup_Barragán.png'
import id34 from '../public/Catsup_Stephania.png'

import id35 from '../public/Jamon Americano-2.jpg'










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
            image: id1,
            name: 'Jamón pierna supremo',
            prise: '12.23',
        },
        {
            id: '2',
            category: 'Jamones',
            image: id2,
            name: 'Jamón pierna Barragán',
            prise: '12.23',
        },
        {
            id: '3',
            category: 'Jamones',
            image: id3,
            name: 'Jamón pierna holandés',
            prise: '12.56',
        },
        {
            id: '4',
            category: 'Jamones',
            image: id4,
            name: 'Jamón York Stephania',
            prise: '12.23',
        },
        {
            id: '5',
            category: 'Jamones',
            image: id5,
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
            image: id7,
            name: 'Jamón cocido cuadrado Stephania',
            prise: '12.23',
        },
        {
            id: '8',
            category: 'Jamones',
            image: id8,
            name: 'Jamón cocido redondo Stephania',
            prise: '12.23',
        },
        {
            id: '9',
            category: 'Salchichas',
            image: id9,
            name: 'Salchicha de pavo Premium Stephania',
            prise: '12.23',
        },
        {
            id: '10',
            category: 'Salchichas',
            image: id10,
            name: 'Salchicha de pavo Frankfurt Stephania',
            prise: '12.23',
        },
        {
            id: '11',
            category: 'Salchichas',
            image: id11,
            name: 'Salchicha de pavo Stephania',
            prise: '12.23',
        },
        {
            id: '12',
            category: 'Salchichas',
            image: id12,
            name: 'Salchicha de pavo delgada Stephania',
            prise: '12.23',
        },
        {
            id: '13',
            category: 'Salchichas',
            image: id13,
            name: 'Salchicha de pavo Stephania mini 2.6 kg',
            prise: '12.23',
        },
        {
            id: '14',
            category: 'Salchichas',
            image: id14,
            name: 'Salchicha Viena Stephania 2.5 kg',
            prise: '12.23',
        },
        {
            id: '15',
            category: 'Salchichas',
            image: id15,
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
            image: id20,
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
            image: id22,
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
            image: id25,
            name: 'Queso Adoberas para fundir',
            prise: '12.23',
        },
        {
            id: '26',
            category: 'Queso',
            image: id26,
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
            image: id28,
            name: 'Queso de mesa fresco',
            prise: '12.23',
        },
        {
            id: '29',
            category: 'Queso',
            image: id29,
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
            image: id32,
            name: 'Manteca Natural',
            prise: '12.23',
        },
        {
            id: '33',
            category: 'Otros',
            image: id33,
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

    ],
};