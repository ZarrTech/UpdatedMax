import ReactPlayer from "react-player/youtube";
import { aboutText } from "./tet";
import book from '../image/book cover 2.webp'
import { BsWhatsapp } from "react-icons/bs";

const link = 'https://youtu.be/YHuOGTgpxAc?si=Iy9T1K0yOuxYA8lv'
function About() {
  return (
    <section className=" font-inter mt-[30px] py-16 px-9">
      <h1 className=" text-center text-2xl md:text-3xl font-bold text-[#FFD700]">
        Financial Future: "Secrets Schools Won't Teach!"
      </h1>
      <div className=" w-full h-[500px] mt-9 bg-[url('./image/unlucky.webp')] bg-center bg-no-repeat bg-contain"></div>

      <div className="flex md:flex-row flex-col justify-center items-start md:mt-16 mt-9">
        <div className="md:flex-1 w-full rounded-md shadow-[0px_0px_4px_1px_#28282B] overflow-hidden">
          <ReactPlayer controls width={"55"} url={link} />
        </div>
        <div className="md:flex-1 px-9 md:mt-0 mt-9">
          <h1 className="mb-5 text-[#FFD700] text-4xl font-bold">ABOUT US</h1>
          {aboutText.slice(0, 4).map((text) => (
            <p className="last:mb-0 mb-5">{text}</p>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center mt-16 gap-9">
        <div className="flex flex-col flex-1 ">
          <div className="">
            <h1 className=" mb-5 text-center text-[#FFD700] md:text-4xl text-3xl font-bold">
              {" "}
              Get access to my FREE Ebook
            </h1>
            {aboutText.slice(4, 5).map((text) => (
              <p>{text}</p>
            ))}
          </div>

          <button className="  mt-6 flex py-2 px-3 md:mx-0 mx-auto items-center justify-center border rounded-md hover:bg-white hover:text-black transition-all duration-400 ease-in gap-3">
            <a href="https://wa.me/+2349025310479?text=welcome" target="_blank">
              <p className="">Let's talk</p>
            </a>
            <BsWhatsapp />
          </button>
        </div>

        <div className=" flex-1">
          <img className=" w-[350px] mx-auto" src={book} alt="book cover" />
        </div>
      </div>
    </section>
  );
}
export default About;
