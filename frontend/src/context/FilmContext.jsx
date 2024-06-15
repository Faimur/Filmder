import { createContext } from "react";
import { movie_list } from "../assets/movies";

export const FilmContext = createContext(null)

const FilmContextProvider = (props) =>{



    const contextValue = {
       movie_list 
    }
    
    return(
        <FilmContext.Provider value={contextValue}>
            {props.chidren}
        </FilmContext.Provider>
    )
}

export default FilmContextProvider;