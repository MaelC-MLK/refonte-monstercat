import React from 'react';
import { FaYoutube, FaTiktok, FaTwitter, FaSpotify, FaTwitch, FaInstagram, FaFacebook, FaApple, FaBandcamp, FaSoundcloud } from 'react-icons/fa';
import Link from "next/link";


export default function Footer() {  
  return (
    <footer className="bg-black text-white pt-8 pb-20">
      <div className="container mx-auto">
      <div className="mb-16 md:flex md:justify-between">
        <p className=" text-sm italic mb-4">2011 - 2024 © Monstercat, All Rights Reserved</p>
        <div className="flex space-x-4 md:mb-0">
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
        </div>
        <div className="mt-8 text-xs text-center md:mx-72 text-gray-200 italic">
          <p className='mb-4'>We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
          <p>We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.</p>
        </div>
      </div>
    </footer>
  );
};
