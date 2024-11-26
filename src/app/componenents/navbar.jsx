import Image from "next/image";
import MenuBurger from "./menuBurger";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaTwitch,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-black bg-opacity-85 xl:bg-transparent w-full p-3">
      <div className="container xl:mx-8 xl:my-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/monstercat-logo.webp"
            width={36}
            height={36}
            alt="Logo"
            className="w-9 h-9 xl:w-12 xl:h-12"
          />
        </div>
        <MenuBurger />
      </div>
      <div className="hidden xl:block">
        <div className="flex flex-col gap-4 items-center p-4 text-xl ml-2">
          <a
            href="https://www.instagram.com/monstercat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@monstercat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://x.com/monstercat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.twitch.tv/monstercat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch />
          </a>
          <a
            href="https://www.facebook.com/monstercat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://discord.com/invite/monstercat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
}
