import { MagnifyingGlass } from "phosphor-react";
import React, { useEffect, useState } from "react";
import perfilImage from "../assets/perfil3.png";
import { searchMovies } from "../services/api";
import { SearchBar } from "./SearchBar";

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

      <div>
        <a href="https://github.com/Megadraco2">
          <img
            className="fixed right-5 top-2 w-12 object-contain rounded-full cursor-pointer hover:opacity-50 transition-all"
            src={perfilImage}
            alt="Megadraco2"
          />
        </a>
      </div>
    </div>
  );
}
