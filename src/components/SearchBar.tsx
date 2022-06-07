
import { MagnifyingGlass } from "phosphor-react"
import React, { useState } from "react"
import { searchMovies } from "../services/api"

export const SearchBar = (props : any) => {
    const {onSearch} = props
    const [search, setSearch] = useState('')

    const onChangerHandler = (e : any) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
       onSearch(search)
    }


    return (
        <div className="fixed right-28 top-3 w-64 flex justify-between items-center object-contain z-10">
        <input onChange={onChangerHandler} type="text" name="search" className="bg-zinc-600 bg-opacity-50 p-1 border-b-white border-opacity-50 border-b-2 focus:border-opacity-100 focus:outline-none transition-colors" />
        <button onClick={onButtonClickHandler} type="submit" className="w-10 h-10 cursor-pointer bg-zinc-500 rounded-full flex justify-center items-center hover:bg-zinc-700 transition-all"><MagnifyingGlass/></button>
      </div>
    )
}