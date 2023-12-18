import { Faq } from "../page/tet";
import faqImg from "../image/faq (2).svg";
import { useState } from "react";
import Reveal from "../utils/Reveal";
const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <section className=" py-16 px-9 border-b border-slate-700">
      <div className="flex md:flex-row flex-col items-center justify-center">
        <div className="md:w-[60%]">
          <Reveal>
            <h1 className=" font-bold text-4xl mb-3 text-center font-inter text-[#FFD700]">
              FAQ
            </h1>
          </Reveal>

          <div className="md:w-[100%] bg-[#0d0d0d] p-4">
            {Faq.map((faq, i) => (
              <Reveal>
                <div
                  className=" relative last:mb-0 mb-5 bg-black p-4"
                  key={i}
                  onClick={() => toggle(i)}
                >
                  <p className=" font-semibold relative">{faq.question}</p>
                  <p
                    className={`mt-3 overflow-hidden transition-all duration-300 ease-in ${
                      selected === i ? "max-h-40" : "max-h-0 "
                    }`}
                  >
                    {faq.answer}
                  </p>
                  <span className=" absolute top-4 right-4 transition-all duration-300 ease-in">
                    {selected === i ? "-" : "+"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="flex-1">
            <img src={faqImg} alt="" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
export default FAQ;
