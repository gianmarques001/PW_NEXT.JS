"use client";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function Card({ titulo, nota }) {
  const [favorito, setFavorito] = useState(true);

  function favoritar() {
    setFavorito(true);
  }
  function desfavoritar() {
    setFavorito(false);
  }

  return (
    <div className="flex flex-col items-center w-48 relative">
      {favorito ? 
        <FavoriteIcon
          onClick={desfavoritar}
          className="absolute top-2 right-2 cursor-pointer "
        />
       : 
        <FavoriteBorderIcon
          onClick={favoritar}
          className="text-red-700 cursor-pointer absolute top-2 right-2"
        />
      }

      <img
        className="rounded"
        src="https://www.themoviedb.org/t/p/w220_and_h330_face/zEqwfO5R2LrrLgV61xm8M9TmNTG.jpg"
        alt=""
      />
      <span className="text-lg font-bold line-clamp-1">{titulo}</span>
      <div>
        <i></i>
        <span>{nota}</span>
      </div>
      <a
        href=""
        className="bg-sky-300 text-black w-full text-center rounded py-1"
      >
        detalhes
      </a>
    </div>
  );
}
