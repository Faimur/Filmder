import { createContext } from "react";
import { movie_list } from "../assets/genre";

//export const FilmContext = createContext(null)

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