import { benefits } from "../page/tet";
import { MdDone } from "react-icons/md";
import Line from "./Line";


function Pbo() {
  return (
    <section id="benefits" className="p-9 font-inter">
      <div className="text-center">
        <div className="flex flex-col items-center">
          <h1 className=" text-3xl font-semibold">PBO</h1>
          <div className="mr-[2rem] bg-white w-[2rem]">
            <Line />
          </div>
        </div>

        <p className="mt-3 md:w-[40%] mx-auto">
          Joining The PBO  has enormous advantages for all
          participants and ordinary Nigerians’ lives can be transformed from the
          ordinary to the extraordinary with the following {""}
          <strong className=" bg-yellow-500 rounded-md text-black p-1">
            benefits:
          </strong>
        </p>
      </div>
      <div className=" md:grid md:grid-cols-3 md:grid-rows-3 mt-3 gap-4 items-center">
        {benefits.map((benefit) => {
          return (
            <div
              key={benefit.id}
              className="flex justify-between p-4 bg-black text-white rounded-lg hover:transform hover:scale-105 duration-1000 shadow-[inset_5px_6px_10px_0px_#1a202c] mt-3"
            >
              <div>
                <MdDone size={30} color="green" />
              </div>
              <div>
                {benefit.text}{" "}
                <strong className="rounded-md bg-yellow-500 ounded-md text-black p-1">
                  {benefit.style}
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Pbo