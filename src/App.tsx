import { useState } from "react";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";
import { Row } from "./components/Row";
import { SearchBar } from "./components/SearchBar";
import categories,  { getMovies, searchMovies } from "./services/api";

import MovieResults from "./services/api"

export function App() {
  const [movieSearched, setMovieSearched] : any = useState()

  const onSearchHandler = async (query : String) => {
    const result = await searchMovies(query)
    console.log(result)
    setMovieSearched(result)
  }

  return (
    <div className="">
      <Nav />
      <SearchBar onSearch={onSearchHandler}/> 
      <Banner /> 
     
      {categories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
      
    </div>
  );
}
