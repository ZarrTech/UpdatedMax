import { abouts } from "./tet"
import { Link } from "react-router-dom";
import {IoReturnDownBack} from 'react-icons/io5'
import Line from "../components/Line";

function AboutDetails() {
  return (
    <section className=" relative font-inter">
      {abouts.map((about, index) => {
        return (
          <div key={index} className=" p-9 flex flex-col items-center">
            <div>
              <h1 className=" font-semibold text-4xl">{about.heading}</h1>
              <div className=" bg-white w-[30%]">
                <Line />
              </div>
            </div>

            <div className="w-[80%] mb-3 mt-3">
              <img
                className=" h-full rounded-3xl object-cover"
                src={about.img}
                alt={about.heading}
              />
            </div>
            <p className=" mt-3">{about.text}</p>
          </div>
        );
      })}
      <div className=" absolute top-0 flex items-center text-center gap-1 pl-9">
        <IoReturnDownBack/>
        <Link className=" font-medium" to="/">back</Link>
      </div>
    </section>
  );
}
export default AboutDetails;
