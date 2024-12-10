// components/Footer.js
import React from 'react';
import { FaYoutube, FaTiktok, FaTwitter, FaSpotify, FaTwitch, FaInstagram, FaFacebook, FaApple, FaBandcamp, FaSoundcloud } from 'react-icons/fa';
import Link from "next/link";
import { monumentextended } from "../fonts/font";


export default function Footer() {  
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 mb-8 md:mb-0">
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest`}>ABOUT MONSTERCAT</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest`}>CONTACT US</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest`}>CAREERS</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest`}>NEWS</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest`}>PRESS</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest`}>TERMS OF SERVICE</Link></li>
            <li><Link href="#" className={`${monumentextended.className} text-sm tracking-widest`}>PRIVACY POLICY</Link></li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className={`${monumentextended.className} tracking-wide text-md text-gray-400 font-bold mb-2`}>MONSTERCAT NEWS</h2>
          <p className="mb-4">Don't miss a thing, stay up to date with the latest news from us.</p>
          <form className="flex">
            <input type="email" placeholder="Enter email" className="p-2 flex-grow rounded-l-md" />
            <button type="submit" className="p-2 bg-white text-black rounded-r-md">→</button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
        <Link href="https://www.youtube.com/user/MonstercatMedia" target="_blank" rel="noopener noreferrer">
        <FaYoutube size="1.3em" />
        </Link>
        <Link href="https://tiktok.com/@monstercat" target="_blank" rel="noopener noreferrer">
          <FaTiktok size="1.3em" />
        </Link>
        <Link href="https://twitter.com/monstercat" target="_blank" rel="noopener noreferrer">
          <FaTwitter size="1.3em" />
        </Link>
        <Link href="https://open.spotify.com/user/monstercatmedia" target="_blank"      rel="noopener noreferrer">
          <FaSpotify size="1.3em" />
        </Link>
        <Link href="https://www.twitch.tv/monstercat" target="_blank" rel="noopener noreferrer">
          <FaTwitch size="1.3em" />
        </Link>
        <Link href="https://www.instagram.com/monstercat" target="_blank" rel="noopener     noreferrer">
          <FaInstagram size="1.3em" />
        </Link>
        <Link href="https://www.facebook.com/monstercat" target="_blank" rel="noopener      noreferrer">
          <FaFacebook size="1.3em" />
        </Link>
        <Link href="https://music.apple.com/ca/curator/monstercat/1233905953" target="_blank"       rel="noopener noreferrer">
          <FaApple size="1.3em" />
        </Link>
        <Link href="https://monstercat.bandcamp.com" target="_blank" rel="noopener noreferrer">
          <FaBandcamp size="1.3em" />
        </Link>
        <Link href="https://soundcloud.com/monstercat" target="_blank" rel="noopener    noreferrer">
          <FaSoundcloud size="1.3em" />
        </Link>
          </div>
          <p className="text-sm text-center md:text-left">2011 - 2024 © Monstercat, All Rights Reserved</p>
        </div>
        <div className="mt-8 text-xs">
          <p>We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
          <p>We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.</p>
        </div>
      </div>
    </footer>
  );
};
