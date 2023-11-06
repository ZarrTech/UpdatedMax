import { testimonials } from "../page/tet";
import Line from "./Line";
import { images } from "../page/tet";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from 'react-icons/rx'
import { useState } from "react";



function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const moveSlide = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(moveSlide)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length -1;
    const moveSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(moveSlide);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <section id="testimonials" className=" mt-4 p-9 font-inter">
      <div className=" ">
        <div className=" w-[300px] flex flex-col mx-auto py-1 relative">
          <div className=" text-center">
            <h3 className=" mt-3 font-semibold text-2xl mb-3">
              WHAT PEOPLE ARE SAYING ABOUT OUR FREE BUSSINESS SEMINARS.{" "}
            </h3>
          </div>
          <div className=" w-full h-full bg-center bg-cover duration-500">
            <img src={images[currentIndex].img} alt="" />
          </div>
          <div
            onClick={prevSlide}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-sm bg-black/40 rounded-2xl p-1 cursor-pointer"
          >
            <BsChevronCompactLeft size={20} />
          </div>
          <div
            onClick={nextSlide}
            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-sm bg-black/40 rounded-2xl p-1 cursor-pointer"
          >
            <BsChevronCompactRight size={20} />
          </div>
          <div className="flex top-4 py-3 justify-center ">
            {images.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex flex-col items-center">
            <h1 className=" text-3xl font-semibold">Testimonials</h1>
            <div className="mr-mr bg-white">
              <Line />
            </div>
          </div>
          <div className=" flex md:flex-row flex-col mx-auto gap-5">
            {testimonials.map((testimonial) => {
              return (
                <div
                  key={testimonial.name}
                  className=" w-full p-4 bg-black text-white rounded-lg mt-3  hover:transform hover:scale-105 duration-1000 shadow-[inset_5px_6px_10px_0px_#1a202c] md:mb-0 mb-3"
                >
                  <h4 className=" text-2xl font-semibold  mb-3">
                    {testimonial.name}
                  </h4>
                  <p>{testimonial.text}</p>
                </div>
              );
            })}
            <></>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials