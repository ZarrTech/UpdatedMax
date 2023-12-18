
import {BsWhatsapp} from 'react-icons/bs'
import { motion, useInView, useAnimation, delay } from "framer-motion";
import { useEffect, useRef, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import {Pbo, Reuse, FAQ, Benefits, Training, Testimonials, Avatar, MyLoader, Reveal} from './index'



function Hero() {
  
  return (
    <>
      <section className=" relative md:text-start items-center text-center w-full flex-col md:flex-row mt-28  md:mt-24  border-b border-slate-700 px-9">
        <div className=" flex justify-center items-center  w-full flex-col md:flex-row">
          <div className=" md:w-1/2  md:pr-0 pr-9">
            <h1 className="w-full md:h-[200px] h-[240px] text-center md:text-4xl text-[20px] font-semibold font-inter">
              <div></div>
              <Reuse />
            </h1>

            <Reveal>
              <div className="mt-6">
                I've been there, deep in the rat race, homeless, broke, and
                hungry in Lagos. Then, I found the game-changer: real estate.
              </div>
            </Reveal>

            <Reveal>
              <button className="  mt-6 mb-6 flex py-2 px-3 md:mx-0 mx-auto items-center border rounded-md hover:bg-white hover:text-black transition-all duration-400 ease-in gap-3">
                <a
                  href="https://wa.me/+2349025310479?text=welcome"
                  target="_blank"
                >
                  <p>Let's talk</p>
                </a>
                <BsWhatsapp />
              </button>
            </Reveal>
          </div>

          <div className=" h-[500px] relative rounded  md:w-1/2 w-full md:ml-10 md:pl-[88px]">
            {/* <img className=" h-full object-cover mr-10" src={image} alt="" /> */}
            <Canvas shadows>
              <Suspense fallback={<MyLoader />}>
                <Avatar />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
      <Pbo />
      <Testimonials />
      <FAQ />
      <Benefits />
      <Training />
    </>
  );
}
export default Hero