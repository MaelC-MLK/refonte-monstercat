import Image from "next/image";
import { monumentextended } from "../fonts/font";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuPlay } from "react-icons/lu";

export default function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-20 mx-4 md:mr-96 md:mt-20">
      <div className="flex flex-col gap-8
       md:flex-row md:items-end md:gap-0">
          <Image src="/cover.webp" width={800} height={800} alt="Logo" />
          <p className="text-white italic text-sm md:text-lg md:-rotate-90 md:origin-bottom-right">
            <span className="text-custom-green">Instinct </span>— Released May 22, 2020
          </p>
        </div>
        <div className="flex flex-col justify-start items-start text-start">
        <p
            className={`${monumentextended.className} text-white uppercase text-2xl md:text-5xl mb-2 md:mb-6 tracking-widest`}
            style={{ color: 'transparent' }}
          >
            <span className="text-white block md:hidden">
              Level Days
            </span>
            <span className="hidden md:block" style={{ WebkitTextStroke: '1px white' }}>
              Level Days
            </span>
          </p>
          <p
            className={`${monumentextended.className} text-white uppercase  text-xl md:text-4xl`}
          >
            Conro
          </p>
          <div className="flex justify-start gap-2 md:gap-4 mt-6 md:mt-16">
            <button
              className={`flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-custom-green uppercase tracking-widest text-xs text-white ${monumentextended.className} duration-200 hover:duration-200 hover:bg-white hover:text-black`}
            >
              <LuPlay />
              Listen Now
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 border uppercase border-white tracking-widest text-xs text-white ${monumentextended.className} duration-200 hover:duration-200 hover:bg-white hover:text-black`}
            >
              <IoShareSocialOutline />
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
