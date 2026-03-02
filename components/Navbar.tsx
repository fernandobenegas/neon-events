"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold tracking-widest text-pink-500 drop-shadow-[0_0_10px_#ff00ff]">
          Ambiente Digital
        </h1>
  <span className="h-[2px] w-full bg-pink-500 shadow-[0_0_12px_#ff00ff]"></span>
</div>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
          <a href="#servicios" className="hover:text-cyan-400 transition">
            Servicios
          </a>
          <a href="#galeria" className="hover:text-pink-400 transition">
            Galería
          </a>
          <a href="#contacto" className="hover:text-green-400 transition">
            Contacto
          </a>
        </div>

       
      </div>
    </nav>
  );
}