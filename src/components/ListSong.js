import React, {useContext, useEffect, useState} from "react";
import { Songs } from "../Context";

export default function ListSong() {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    const [idSong, setidSong] = useState(0)
    const handlePLaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(() => {
        setidSong(song.id)
    }, [song])

  return (
    <div className="col-span-2 overflow-y-scroll">
        <table className="table-auto w-full">
            <thead className="h-12 text-white">
                <tr>
                    <th className="w-[10%]">#</th>
                    <th className="text-left">Title</th>
                    <th className="w-[10%]">Author</th>
                    <th className="w-[10%]"><i className="fa fa-download"></i></th>
                </tr>
            </thead>
            <tbody>
                {DataSongs.map((song, index) => (
                        <tr key={index} 
                        className={`bg-slate-800 text-gray-500 h-12 hover:bg-slate-600 ${idSong === song.id && `text-teal-400 bg-slate-600`}`}
                        onClick={() => handlePLaySong(song.id)}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-left">{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center"><a href={song.url}><i className="fa fa-download"></i></a></td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}
