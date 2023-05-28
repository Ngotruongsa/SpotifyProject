import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const {song} = useContext(Songs)

  return (
    <div className="col-span-1 p-3">
        <h2 className="text-cyan-500 font-bold">Now playing</h2>
        <h2 className="text-neutral-400 text-2xl">{song.name}</h2>
        <div className="flex justify-center items-center mt-16">
            <img src={song.links.images[0].url} alt="avatar" className="w-64" />
        </div>
        <div className="flex justify-evenly items-center mt-4">
            <img src={song.links.images[1].url} alt="avatar" className="w-16 rounded-full" />
            <span className="text-white text-xl">{song.author}</span>
        </div>
    </div>
  )
}
