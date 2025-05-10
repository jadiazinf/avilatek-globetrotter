"use client";

import { useEffect, useState } from "react";

type Props = {
  texts: string[];
  interval?: number;
  className?: string;
};

export function FadeTextSlider({
  texts,
  interval = 5000,
  className = "",
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;

    const cycle = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, interval);

    return () => clearInterval(cycle);
  }, [texts.length, interval]);

  if (!texts || texts.length === 0) {
    return <div className={className}>No hay textos disponibles</div>;
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <p
        className={`text-xl text-center transition-opacity duration-500 font-raleway ${fade ? "opacity-100" : "opacity-0"}`}
      >
        {texts[currentIndex]}
      </p>
    </div>
  );
}
