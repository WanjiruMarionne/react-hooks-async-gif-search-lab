import React from "react";

function GifList ({gifs}) { /*gifs prop is passed from GifListContainer */
    
    /* Returns an iteration of the gifs array and matches the image to display with its url and title */
    return (
        <div>
            <ul>
                {gifs.map((gif) => {
                    return (
                        <li key={gif.id}>
                        <img src={gif.images.original.url} alt={gif.title}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GifList;