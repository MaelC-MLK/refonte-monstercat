"use client";

import React from "react";
import { monumentextended } from "../fonts/font";
import { LuPlay } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { montserrat } from "../fonts/font.jsx";


const tracks = [
  { number: 1, title: "The Small Things", artist: "Conro", duration: "3:35" },
  { number: 2, title: "Without Your Love", artist: "Conro", duration: "3:09" },
  { number: 3, title: "Therapy", artist: "Conro", duration: "3:06" },
  { number: 4, title: "Fighters", artist: "Conro", duration: "3:46" },
  { number: 5, title: "Way Up", artist: "Conro & Nevve", duration: "3:32" },
  { number: 6, title: "Waiting", artist: "Conro", duration: "3:07" },
  { number: 7, title: "Dreaming", artist: "Conro", duration: "2:57" },
  { number: 8, title: "Tattoo", artist: "Conro", duration: "3:29" },
  { number: 9, title: "Out for the Night", artist: "Conro", duration: "3:05" },
  { number: 10, title: "Overdue", artist: "Conro", duration: "2:48" },
  { number: 11, title: "Say It", artist: "Conro", duration: "3:04" },
  { number: 12, title: "Here to Stay", artist: "Conro", duration: "2:44" },
];

export default function Tracklist() {
  return (
    <div className="bg-black mx-auto px-4 mt-10">
      <h3 className={`uppercase text-2xl text-white md:text-5xl md:mb-10 md:mt-20 md:tracking-wider ${monumentextended.className}`}>Track List</h3>
      <ul className="mt-4 px-2">
        {tracks.map((track) => (
          <li key={track.number} className="flex items-center justify-between text-white py-2">
            <div className="flex items-center gap-8">
              <span className="text-lg">{track.number}</span>
              <button className="text-white">
                <LuPlay size="1.3em"/>
              </button>
              <div>
                <p className={`text-lg font-semibold ${montserrat.className}`}>{track.title}</p>
                <p className={`text-sm font-semibold ${montserrat.className}`}>{track.artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg">{track.duration}</span>
              <button className="text-white">
              <IoShareSocialOutline size="1.3em" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}