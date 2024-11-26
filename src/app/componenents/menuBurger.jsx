"use client";

import React, { useState } from "react";
import Image from "next/image";
import { monumentextended } from "../fonts/font";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaTwitch,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="text-3xl cursor-pointer text-white xl:mx-8 xl:my-3 " onClick={toggleMenu} >
        ☰
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 flex flex-col justify-between px-6 ${
          monumentextended.className
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Image
            src="/monstercat-logo-white.svg"
            width={200}
            height={36}
            alt="Logo"
          />
          <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
            ✖
          </div>
        </div>

        <div className="flex-grow p-4 overflow-y-auto max-h-96">
          <div
            className="py-2 uppercase cursor-pointer flex flex-row gap-4"
            onClick={() => toggleSubMenu("music")}
          >
            Music
            <span
              className={`transform transition-transform ${
                activeSubMenu === "music" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
          </div>
          {activeSubMenu === "music" && (
            <div className="ml-4">
              <div className="py-2 text-gray-300 uppercase text-sm">
                Our Music
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Instinct
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Uncaged
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">Silk</div>
            </div>
          )}
          <div className="py-2 uppercase cursor-pointer">Artists</div>
          <div
            className="py-2 uppercase cursor-pointer flex flex-row gap-4"
            onClick={() => toggleSubMenu("about")}
          >
            About
            <span
              className={`transform transition-transform ${
                activeSubMenu === "about" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
          </div>
          {activeSubMenu === "about" && (
            <div className="ml-4">
              <div className="py-2 text-gray-300 uppercase text-sm">
                About Monstercat
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Diversity & Inclusion
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Code of Ethics
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Environmental
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Contact Us
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Careers
              </div>
            </div>
          )}
          <div className="py-2 uppercase cursor-pointer">News</div>
          <div
            className="py-2 uppercase cursor-pointer flex flex-row gap-4"
            onClick={() => toggleSubMenu("events")}
          >
            Events
            <span
              className={`transform transition-transform ${
                activeSubMenu === "events" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
          </div>
          {activeSubMenu === "events" && (
            <div className="ml-4">
              <div className="py-2 text-gray-300 uppercase text-sm">
                Monstercat Events Experience
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Upcoming Events
              </div>
            </div>
          )}
          <div
            className="py-2 uppercase cursor-pointer flex flex-row gap-4"
            onClick={() => toggleSubMenu("programming")}
          >
            Programming
            <span
              className={`transform transition-transform ${
                activeSubMenu === "programming" ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
          </div>
          {activeSubMenu === "programming" && (
            <div className="ml-4">
              <div className="py-2 text-gray-300 uppercase text-sm">
                MonstercatTV
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Call of the Wild
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Silk Showcase
              </div>
              <div className="py-2 text-gray-300 uppercase text-sm">
                Upcoming Shows
              </div>
            </div>
          )}
          <div className="py-2 uppercase cursor-pointer">Gold</div>
          <div className="py-2 uppercase cursor-pointer">Partners</div>
          <div className="py-2 uppercase cursor-pointer">Press</div>
          <div className="py-2 uppercase cursor-pointer">Player</div>
          <div className="py-2 uppercase cursor-pointer">Shop</div>
          <div className="py-2 uppercase cursor-pointer">Lost Civilization</div>
        </div>

        <div className="flex justify-around p-4">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-twitch"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-discord"></i>
        </div>
        <div className="flex flex-row gap-4 items-center p-4 text-xl ml-2">
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
        <div className="flex justify-start items-center p-4">
          <button className="border-white border text-white px-3 py-1 mx-2 uppercase hover:text-black hover:bg-white duration-300 hover:duration-300">
            <p className="flex items-center">Sign In</p>
          </button>
          <span className="text-white">OR</span>
          <button className="text-white px-4 py-2 uppercase">Sign Up</button>
        </div>
      </div>
    </>
  );
}
