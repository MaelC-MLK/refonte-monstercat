"use client";

import React from "react";
import { monumentextended } from "../fonts/font";

export default function MusicLauncher() {
  return (
    <div className="bg-black px-4 mt-10">
      <h3 className={`uppercase text-2xl text-white ${monumentextended.className}`}>Music video</h3>
      <div className="mt-4 video-container">
        <iframe
          src="https://www.youtube.com/embed/7nObtWENgxA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}