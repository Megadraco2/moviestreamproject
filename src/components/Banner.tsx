import { useEffect, useState } from "react";
import categories, { getMovies } from "../services/api";


export function Banner() {
    const [movie,  setMovie] = useState({});

    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
            
        } catch (error) {
            console.log("Banner fetchRandomMovie: ", error);
        }
    };

    useEffect(() => {
      fetchRandomMovie();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }
    
    return <header className="object-contain h-112" style={{backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>

    <div className="ml-7 pt-36 h-48">
        <h1 className="text-5xl font-extrabold pb-2">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="flex">
            <div className="cursor-pointer font-bold rounded-sm py-2 px-8 ml-8 bg-[#333333] bg-opacity-60 hover:text-black hover:bg-[#e6e6e6] transition-all" >
                Assistir
            </div>
            <div className="cursor-pointer font-bold rounded-sm py-2 px-8 ml-8 bg-[#333333] bg-opacity-60 hover:text-black hover:bg-[#e6e6e6] transition-all">
                Minha Lista
            </div>
        </div>
        <div className="w-180 pt-4 text-xl max-w-sm h-20 font-bold">{truncate(movie?.overview, 150)}</div>
    </div>

    </header>
    
}