import image from '../image/hhh.webp'
import {BsWhatsapp} from 'react-icons/bs'
import {  motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Reuse from './Reuse';
import { Suspense } from "react";
import MaxAnimate from "./MaxAnimate";
import { Canvas } from "@react-three/fiber";
import MyLoader from "./MyLoader";


function Hero() {
  
  const [ref, inView] = useInView({
    threshold: 0.3
  })

  const animation = useAnimation()
  
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition:{
        type: 'spring', duration: 1, bounce:0.3
        }
      })
    }
    if (!inView) {
      animation.start({x: '-100vw'})
    }
  },[inView])
  return (
    <section
      ref={ref}
      id="home"
      className="md:h-screen md:text-start items-center text-center w-full flex flex-col md:flex-row md:mt-12 mt-24 pl-9"
    >
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 4, bounce: 0.4 }}
        className=" md:w-1/2  md:pr-0 pr-9"
      >
        <h1 className="w-full md:h-[200px] h-[240px] text-center md:text-4xl text-[20px] font-semibold font-inter">
          <div></div>
          <Reuse />
        </h1>
        <div className="mt-6">
          I've been there, deep in the rat race, homeless, broke, and hungry in
          Lagos. Then, I found the game-changer: real estate.
        </div>
        <button className="  mt-6 mb-6 flex py-2 px-3 md:mx-0 mx-auto items-center border rounded-md hover:bg-white hover:text-black transition-all duration-400 ease-in">
          <a href="https://wa.me/+2349025310479?text=welcome" target="_blank">
            <p className="me-4">Let's talk</p>
          </a>
          <BsWhatsapp />
        </button>
      </motion.div>

      <motion.div
        initial={{ x: "70vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 10, bounce: 0.3 }}
        className=" h-[500px] mb-4 relative rounded  md:w-1/2 w-full md:ml-10 md:pl-[88px]"
      >
        {/* <img className=" h-full object-cover mr-10" src={image} alt="" /> */}
        <Canvas shadows>
          <Suspense fallback={<MyLoader />}>
            <MaxAnimate />
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  );
}
export default Hero