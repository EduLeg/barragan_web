import React, { Suspense } from "react"

import Head from 'next/head';
import Hero from '../components/Hero';
import Header from "../components/Header";
import Aboutus from "../components/Aboutus";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Products_slider from "../components/Products_slider";
import Workwithus from "../components/Workwithus";
import Footer from "../components/Footer";
import Shops from "../components/Shops";
import loading from "./loading";
export default function Home() {

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Cremerias Barragan</title>
        <meta name="description" content="Donde más barato te dan,
La preferida de los jaliscienses" />
      </Head>
      <Header />
      <Suspense fallback={<loading />}>
        <Hero />
        <Shops />
        <Products />
        <Aboutus />
        <Workwithus />
        <Contact />
        <Footer />
      </Suspense>




    </div>
  )
}
