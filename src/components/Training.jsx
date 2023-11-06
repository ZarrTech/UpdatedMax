import { links } from "../page/tet";
import Line from "./Line";
import ambaWithBoss from "../image/pwanBossAndAmbass.webp";
import book from '../image/book cover 2.webp'

function Training() {
  const lists = [
    { name: "Personal Development" },
    { name: "Emotional Intelligence" },
    { name: "Knowing What You Really Want in Life - Discovering Yourself" },
    { name: "How to Attract Everything You Want to Yourself" },
    { name: "Real Estate Network Marketing" },
    { name: "Why Sales - How to Sell" },
    { name: "Recruitment, Secrets to Generational Legacy" },
    { name: "Land & Everything You Need to Know About It" },
    { name: "Advertising Online & Offline (How to Sell to Nigerians)" },
    { name: "Developing Entrepreneurial Mindset" },
  ];

  return (
    <section id="training" className=" p-9 font-inter md:text-center">
      <div>
        <h1 className=" text-3xl font-semibold">
          Want to Join The PBO Plus Network?
        </h1>
        <div className="bg-white inline-block mb-3">
          <Line />
        </div>
      </div>

      <div className="mt-3 md:w-[400px] mx-auto">
        <img className=" w-full rounded-2xl" src={ambaWithBoss} alt="pbo" />
      </div>
      <p className="mt-3">
        I meant what I said in the heading, you can secure your financial future
        forever by learning investment secrets no school will ever teach you.
        You can join the PBO Plus network by being part of a special 5-day
        training organized by{" "}
        <strong>Mr. empowerment himself Dr. Augustine Onwumere.</strong>
      </p>

      <div className=" mt-3">
        {links.map((link, index) => {
          return (
            <div key={index} className="mt-3">
              <p>{link.text}</p>
              <a className=" text-blue-600" href={link.anchor}>
                {link.click}
              </a>
            </div>
          );
        })}
      </div>

      <div>
        <h4 className=" font-normal text-2xl mt-3">
          Some of The Things You Will Be Learning at The PBO Plus Training.
        </h4>
        <div className="mt-3 md:w-[400px] mx-auto">
          <img className="w-full rounded-2x1" src={book} alt="book Cover" />
        </div>
        <ul className="mt-3 md:flex flex-col items-center">
          {lists.map((list, index) => {
            return (
              <li className=" list-disc" key={index}>
                {list.name}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Training;
