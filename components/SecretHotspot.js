"use client";
import { useRef } from "react";

export default function SecretHotspot() {
  const timerRef = useRef(null);

  function startPress() {
    timerRef.current = setTimeout(() => {
      window.location.href = "https://yaiba-arg.vercel.app";
    }, 2500); // 2.5 second hold
  }

  function endPress() {
    clearTimeout(timerRef.current);
  }

  return (
    <div
      className="absolute bottom-6 right-6 w-10 h-10 opacity-0 hover:opacity-20 transition bg-black/5 rounded-full cursor-pointer"
      title=""
      onMouseDown={startPress}
      onMouseUp={endPress}
      onMouseLeave={endPress}
      onTouchStart={startPress}
      onTouchEnd={endPress}
    />
  );
}
