import React, { useState } from "react"

function GifSearch ({ onSubmit }) {
    /*Sets state for the search text input */
    const [searchText, setSearchText] = useState("");

    /*Handles the submission of the search inputs on form data (correspponds to the prop passed from GifListContainer) */
    function handleSearch (event) {
        event.preventDefault();
        onSubmit(searchText);
    }

    /*Handles the changes made to the search input */
    function handleSearchChange (event) {
        setSearchText(event.target.value);
    }

    /*Search form set up */
    return (
        <div>
            <form id= "formData" onSubmit = {handleSearch}>
                <input 
                id = "searchInput"
                name="searchText"
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchChange}
                />
                <button type="submit"> Search </button>
            </form>
        </div>
    )
}

export default GifSearch;

