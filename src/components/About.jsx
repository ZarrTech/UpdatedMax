
import Iframe from 'react-iframe';
import Line from "./Line";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
function About() {
 const [ref, inView] = useInView({
   threshold: 0.2,
 });

  const animation = useAnimation();
  const animation2 = useAnimation()

 useEffect(() => {
   if (inView) {
     animation.start({
       x: 0, opacity:1,
       transition: {
         type: "spring",
         bounce: 0.3,
         duration:6
       },
     });
   }
   if (!inView) {
     animation.start({ x: "-100vw", opacity:0 });
   }
 }, [inView]);

  // useEffect(() => {
  //   if (inView) {
  //     animation2.start({
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         bounce: 0.3,
  //         duration: 8,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation2.start({ x: "100vw", opacity: 0 });
  //   }
  // }, [inView]);

  return (
    <section ref={ref} id='about' className=" p-9  bg-black font-inter">
      <div className=" flex md:flex-row flex-col-reverse  align-center gap-10">
        <motion.div
          
          animate={animation}
          className=" md:w-1/2 md:mx-auto flex items-center"
        >
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YHuOGTgpxAc?si=DuutPx6SG4XvB1G_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>
        </motion.div>
        <motion.div
          animate={animation}
          transition={{ duration: 6 }}
          className=" md:w-1/2 bg text-black"
        >
          <div className=" text-white shadow-[inset_5px_6px_10px_0px_#1a202c] p-4 rounded-lg">
            <h1 className=" font-inter font-semibold text-3xl">ABOUT</h1>
            <div className="bg-white inline-block mb-3">
              <Line />
            </div>

            <p className=" mb-3">
              I'm Engr. Ofoegbu Charles, a Business Development Executive at
              PWAN Group, Nigeria's premier real estate investment and marketing
              company. Inspired by the words of Dr. Augustine Onwumere, PWAN
              Group's chairman, I've experienced a transformative journey in the
              world of real estate, moving from challenging circumstances to
              financial success. I've witnessed the incredible potential of real
              estate as a secure and appreciating asset that empowers
              individuals to control their financial future. With my experience
              working closely with PWAN Group, I'm here to help you discover how
              to make the most of real estate investment in just three months.
              Let me introduce you to the PWAN Business Owners Plus (PBO Plus)
              platform, an upgraded real estate network marketing opportunity.
              This platform has a proven track record of creating millionaires
              and offers a path to financial independence and home ownership.
              Join us on this remarkable journey towards financial security and
              success.
            </p>
            <Link
              to="/more"
              className="py-2 px-3 bg-white rounded-2xl text-left text-black font-medium mt-3"
            >
              read more
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default About;
