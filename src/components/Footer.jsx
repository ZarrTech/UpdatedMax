import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoTelegram } from 'react-icons/bi'
import { BsWhatsapp } from "react-icons/bs";
import { navs } from '../page/tet';
export default function Footer() {
    
  return (
    <section
      id="contact"
      className="shadow-[2px_6px_20px_9px_#1a202c]  px-9 flex md:flex-row flex-col gap-3 font-inter justify-around items-center py-3 "
    >
      <ul className=" text-sm text-center">
        {navs.map((nav) => {
          return (
            <li key={nav.name} className="mb-2 text-[0.7rem]">
              <a href={nav.link}>{nav.name}</a>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col items-center">
        <h4 className=" font-semibold mb-2">CONTACT</h4>
        <p className="mb-2">+2349099999827</p>
        <p className="mb-2">totalprofits@gmail.com</p>
      </div>

      <div className=" flex flex-col items-center">
        <h4 className=" font-semibold ">socials</h4>
        <div className=" flex gap-2 mt-2">
          <AiOutlineInstagram />
          <BiLogoTelegram />
          <a href="https://wa.me/+2349025310479?text=welcome" target="_blank">
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}