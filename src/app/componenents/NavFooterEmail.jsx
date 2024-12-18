// components/Footer.js
import React from 'react';
import Link from "next/link";
import { monumentextended } from "../fonts/font";


export default function NavFooterEmail() {  
  return (
    <div className="bg-black text-white pt-8 pb-8">
      <div className="container mx-auto">
        <div className='md:flex flex-row justify-between'>
        <div>
        <ul className="flex flex-col gap-1 mb-8 md:flex-row md:gap-12 lg:gap-24 xl:gap-32">
          <div className="flex flex-col gap-1 md:w-1/2">
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest md:text-lg`}>ABOUT MONSTERCAT</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest md:text-lg`}>CONTACT US</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest md:text-lg`}>CAREERS</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest md:text-lg`}>NEWS</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest md:text-lg`}>PRESS</Link></li>
          </div>
          <div className="flex flex-col gap-1 md:w-1/2">
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest md:text-lg`}>TERMS OF SERVICE</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest md:text-lg`}>PRIVACY POLICY</Link></li>
          </div>
        </ul>
        </div>
        <div className="mb-8">
          <h2 className={`${monumentextended.className} tracking-wide text-base text-gray-400 font-bold mb-2`}>MONSTERCAT NEWS</h2>
          <p className="mb-4 text-sm italic text-gray-50 tracking-widest">Don't miss a thing, stay up to date with the latest news from us.</p>
          <form className="border-b border-gray-400 flex space-x-2 text-lg tracking-wider">
            <input type="email" placeholder="Enter email" className="py-3 px-1 flex-grow rounded-l-md bg-transparent  outline-none" />
            <button type="submit" className="p-2 bg-transparent text-white rounded-r-md">→</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};
