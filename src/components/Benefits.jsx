import { AiTwotoneFire } from "react-icons/ai";
import { Lists } from "../page/tet";
import { Reveal } from "../page";
const Benefits = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-16 px-9">
        <Reveal>
          <p className=" font-bold md:text-4xl text-2xl mb-9">
            Key topics covered in <span className=" text-[#FFD700]">PBO</span>{" "}
            Training.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-4 gap-y-9 gap-x-60 items-center justify-center text-center">
          {Lists.map((list, i) => (
            <Reveal>
              <div
                key={i}
                className=" flex  items-center justify-center md:justify-normal"
              >
                <span className="text-[#FFD700] ">
                  {" "}
                  <AiTwotoneFire />
                </span>
                <p>{list}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Benefits;
