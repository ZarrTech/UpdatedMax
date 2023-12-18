import { images } from "../page/tet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function Training() {
  const [imageIndex, setImageIndex] = useState(0)
  const settings = {
    lazyLoad: true,
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 3,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <section className=" w-full items-centerfont-inter py-16 border-t border-slate-700 px-9">
      <h1 className=" font-bold text-4xl mb-3 text-center font-inter text-[#FFD700]">
        Testimonials
      </h1>
      <div className=" mx-auto block justify-center items-center px-9">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              className={`w-[500px] ${
                index === imageIndex ? "slide activeSlide" : "slide"
              }`}
              key={index}
            >
              <img className="" src={image.img} alt="images" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
export default Training;
