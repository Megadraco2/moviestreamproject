
const API_KEY = "d41ecce816e9ac4c3a8cf83966b4b5dd";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,
        isLarge: false,
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    },
];

const MovieResults = [
    {
        results: "results"
    }
];

export const getMovies = async (path: String) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();

    }catch(error) {
        console.log("error getMovies:", error)
    }
}

export const searchMovies = async (query: String) => {
    try {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}&page=1&include_adult=false`
        const response = await fetch(url);
        return await response.json();
    }catch(error) {
        console.log("error searchMovies:", error)
    }
}


export default categories;
