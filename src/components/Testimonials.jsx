import { testimonials } from "../page/tet";
import Line from "./Line";
import star from '../image/five-stars.svg'
import Reveal from "../utils/Reveal";

function Testimonials() {
  return (
    <section className=" flex md:flex-row flex-col items-center justify-center py-16 px-9 border-b border-slate-700">
      <div className=" flex md:flex-row flex-col justify-center items-center gap-3">
        {testimonials.map((testimonial, i) => {
          console.log(testimonial);
          return (
            <Reveal>
              <div
                key={i}
                className=" p-4 rounded-md shadow-[0px_0px_4px_1px_#28282B] hover:transform hover:scale-105 duration-1000 md:mr-3 last:mt-3"
              >
                <p className=" text-[#FFD700] text-center text-xl font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-center">{testimonial.text}</p>
                <img className="w-[60px] mx-auto" src={star} alt="" />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
export default Testimonials;
