import { benefits } from "../page/tet";
import { TiInputCheckedOutline } from "react-icons/ti";
import Benef from "../image/animation.svg";
import Reveal from "../utils/Reveal";

function Pbo() {
  return (
    <section className=" flex md:flex-row flex-col items-center justify-center font-inter py-16 border-b border-slate-700 px-9">
      <Reveal>
        <div className=" flex-1">
          <img src={Benef} alt="" />
        </div>
      </Reveal>

      <div className=" md:w-[50%]">
        <Reveal>
          <div className="text-center">
            <p className="mt-3  mx-auto font-semibold">
              "Unlocking incredible transformation for ordinary Nigerian lives -
              that's the power of joining the PBO, with amazing." {""}
              <strong className="text-[#FFD700] rounded-md  p-1">
                benefits:
              </strong>
            </p>
          </div>
        </Reveal>

        <div className=" mt-3">
          {benefits.slice(1, 5).map((benefit) => {
            return (
              <Reveal>
                <div
                  key={benefit.id}
                  className="flex justify-between p-4 bg-black text-white rounded-lg hover:transform hover:scale-105 duration-1000 mt-1"
                >
                  <div>
                    <TiInputCheckedOutline size={30} color="green" />
                  </div>
                  <div>
                    {benefit.text}{" "}
                    <strong className="rounded-md text-[#FFD700] ounded-md p-1">
                      {benefit.style}
                    </strong>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Pbo;
