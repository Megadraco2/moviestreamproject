
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { getMovies } from "../services/api";


interface DataProps {
    title : String;
    path : String;
    isLarge: boolean;
}
const imageHost = "https://image.tmdb.org/t/p/original/";

export function Row({ title, path, isLarge } : DataProps) {

    const [movies, setMovies] : any = useState([]);

    const fetchMovies = async (_path : String) => {
        try {
            const data = await getMovies(_path);
            setMovies(data?.results);
        } catch (error) {
            console.log("fetchMovies Error:", error);
        }
    };
    useEffect(() => {
      fetchMovies(path);
    
    }, [path])
    

    return (
    <div className="ml-5">
        <h2 className="font-bold">{title}</h2>
        <div className="scrollbarStyle">
            {movies?.map((movie: { id: React.Key | null | undefined; backdrop_path: any; poster_path: any; name: string | undefined; }) => {
                return (
                    <img 
                        className={`w-full max-h-28 mb-3 object-contain hover:scale-110 transition-all px-2 ${isLarge && "max-h-64"}`}
                    key={movie.id} src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`} alt={movie.name} />
                )
            })}
        </div>
    </div>
    );
}

