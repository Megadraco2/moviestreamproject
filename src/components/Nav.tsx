import { MagnifyingGlass } from "phosphor-react";
import React, { useEffect, useState } from "react";
import perfilImage from "../assets/perfil3.png";

export function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div
      className={`fixed top-0 flex justify-between w-full h-16 p-5 z-10 ease-in transition-all ${
        show && "bg-[#111]"
      }`}
    >
      <img
        className="fixed left-5 w-20 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Logo"
      />

      
      <div className="fixed right-28 top-5 w-64 flex justify-between items-center object-contain">
        <input type="text" name="search" className="bg-zinc-600 bg-opacity-50 p-1 border-b-white border-opacity-50 border-b-2 rounded-xl focus:border-opacity-100 focus:outline-none transition-colors" />
        <button type="submit" className="w-10 h-10 cursor-pointer bg-zinc-500 rounded-full flex justify-center items-center hover:bg-zinc-700 transition-all"><MagnifyingGlass/></button>
      </div>

      
      <div>
        <a href="https://github.com/Megadraco2">
          <img
            className="fixed right-5 top-4 w-12 object-contain rounded-full cursor-pointer hover:opacity-50 transition-all"
            src={perfilImage}
            alt="Megadraco2"
          />
        </a>
      </div>
    </div>
  );
}
