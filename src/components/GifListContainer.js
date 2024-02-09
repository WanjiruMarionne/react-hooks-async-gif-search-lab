import React, { useState, useEffect } from "react"
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
    /*Setting states for loading the page, gifs and search elements*/
    const [gifs, setGifs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoaded, setIsLoaded] = useState (false);
    const [isError, setIsError] = useState (false);

    /*Fetching the gifs*/
    useEffect(() => {
        
            setIsLoaded(false); /*is loaded is false because the data is not fetched yet*/
            fetch (`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchText)}&api_key=zFE2PKxfftYmF9N7oAkguCQP0Pcmo9Zy&rating=g`)
            .then ((resp) => resp.json())
            .then((data) => {
                setIsLoaded(true); /*After fetching the data, the data is loaded, and changes the isLoaded state*/
                setGifs(data.data.slice(0,3)); /*sets the gifs state with the first 3 gifs*/
            })
            /*error handling and setting the isError state */
            .catch((error) => {
            setIsError(true);
            console.error('Error:', error);
            });
        
    }, [searchText]); /*The side effects are dependent on the inputs made, and the useEffect will rerender each time the searchText changes*/

    /*Function to handle search when the search input is submitted */
    function handleSearch (term) {
        setSearchText(term);
    }
    
    /*Returns if there is an error with DOM loading */
    if (isError) {
        return <div>Error occurred while fetching data</div>;
    /*Returns when the DOM loads but the gifs are not fetched */
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    /*Returns when the both the DOM and gif fetching load successfully */
    } else {
        return (
            /*Data linking to children and props passing respectively */
            <div>             
                <GifSearch onSubmit={handleSearch} />
                <GifList gifs = {gifs} />
            </div>
        );
    }
}

export default GifListContainer;