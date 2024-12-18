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
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-black bg-opacity-85 xl:bg-transparent w-full p-3">
      <div className="xl:mx-8 xl:my-3 flex justify-between items-start">
        <div className="flex items-center">
          <Image
            src="/monstercat-logo.webp"
            width={36}
            height={36}
            alt="Logo"
            className="w-9 h-9 xl:w-12 xl:h-12"
          />
        </div>
        <div className="block xl:hidden">
          <div>
            <div className="hidden custom:flex flex-row gap-8 items-center p-4 text-xl ml-2">
              <Link
                href="https://www.instagram.com/monstercat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.tiktok.com/@monstercat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTiktok />
              </Link>
              <Link
                href="https://x.com/monstercat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.twitch.tv/monstercat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitch />
              </Link>
              <Link
                href="https://www.facebook.com/monstercat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://discord.com/invite/monstercat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaDiscord />
              </Link>
              <Link href="https://player.monstercat.app/">
                <svg
                  className="position-relative"
                  style={{ top: "3px" }}
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="834 153 612.7 487"
                >
                  <path
                    fill="#f1f1f1"
                    d="M1446.4,445.6c-0.8-24.3-4.5-47.1-19.5-63c-14.1-15-34.3-22.6-57-21.6c-2.3,0.1-3.8,0.1-5.2-1.1 c-3.6-62.8-16.1-147.6-32.4-187.1c-5.1-16.5-26.1-26.1-40.3-14.9c-25.8,14.9-57.2,38.6-83.1,61.9c-18.1-4.5-37.5-7.2-58.1-8 c-0.8,0-1.6-0.1-2.4-0.1l-5.9-0.1v-0.1l-2.3,0.1l-2.3-0.1v0.1l-5.9,0.1c-0.8,0-1.6,0-2.4,0.1c-20.6,0.7-40,3.4-58.1,8 c-25.9-23.3-57.4-47-83.1-61.9c-14.2-11.2-35.2-1.6-40.3,14.9C932,212.3,919.5,297,915.8,359.8c-1.4,1.2-2.9,1.2-5.1,1.1 c-22.7-1-42.9,6.7-57,21.6c-14.9,15.8-18.7,38.7-19.5,63c-0.5,15.2-0.5,20.5,2.4,41c4.7,33.4,28.7,60.2,61.8,63.1 c5.8,0.5,11.6,0.7,17.5,0.7c4.6,0,9.3-0.1,14-0.2c5-0.1,10.2-0.2,15.6-0.2c7.2,0,11.8-7.4,8.8-13.8c-4.5-9.5-8.2-18.9-11.3-28.2 c-2.7-8.3-4.9-16.6-6.4-24.7c-0.2-0.9-0.3-1.8-0.5-2.7c-5.2-29.6-3-58.5,6.6-87.4c13.1-39.4,37.2-72.4,71.5-98.2 c34.2-25.6,76.6-39.8,119.3-40h6.7h6.7c42.8,0.1,85.2,14.4,119.3,40c34.3,25.7,58.4,58.7,71.5,98.2c9.5,28.6,11.8,57.2,6.8,86.5 c-0.4,2.5-0.9,4.9-1.4,7.4c-1.7,8.1-4,16.2-6.8,24.4c-2.8,8.2-6.2,16.5-10.2,24.9c-3,6.4,1.7,13.8,8.8,13.8c5.4,0,10.6,0.1,15.6,0.2 c4.8,0.1,9.4,0.2,14,0.2c5.9,0,11.7-0.1,17.5-0.7c33-2.9,57-29.7,61.8-63.1C1446.9,466.1,1446.9,460.7,1446.4,445.6z"
                  ></path>
                  <g>
                    <path
                      fill="#f1f1f1"
                      d="M1140.4,277.9c-100,0-181.1,81.1-181.1,181.1c0,100,81.1,181.1,181.1,181.1c100,0,181.1-81.1,181.1-181.1 C1321.5,359,1240.4,277.9,1140.4,277.9z M1188.6,476.5c-23.1,13.7-45.9,27.7-69.7,40c-5.8,3.1-16.5,3.3-21.5-0.2 c-4-2.8-5.8-14.6-3.2-19.8c12.2-25.3,10.6-49.3-0.9-74.3c-6-13,1.3-23.2,16.6-23.3c1.4,0.5,5.3,1.5,8.7,3.4 c23.5,13.7,46.9,27.5,70.2,41.6C1205.4,453.9,1205.2,466.6,1188.6,476.5z"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <MenuBurger />
        </div>
      </div>
    </div>
  );
}