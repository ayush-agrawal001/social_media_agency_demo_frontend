"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectPlayer() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src="https://www.youtube-nocookie.com/embed/2tEyh64lmk8?autoplay=1&rel=0"
        title="Shawarmawala Brand Story by Cinemoon Studios"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button className="story-poster" type="button" onClick={() => setPlaying(true)} aria-label="Play Shawarmawala Brand Story">
      <Image src="/studio/shawarmawala-poster.jpg" alt="Sikandar in front of Shawarma Wala for the House of Vision founder story" fill sizes="100vw" />
      <span className="story-play"><i aria-hidden="true">▶</i> Play film</span>
    </button>
  );
}
