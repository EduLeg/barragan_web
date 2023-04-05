import React, { Suspense } from "react"

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
import Nuevoapartado from "../components/Nuevoapartado";

export default function Home() {

  return (
    <div className='overflow-hidden'>
      <Header />
      <Suspense fallback={<loading />}>
        <Hero />
        <Shops />
        <Products />
        <Aboutus />
        <Workwithus />
        <Contact />
        <Footer />
        <Nuevoapartado/>
      </Suspense>




    </div>
  )
}
