import React from 'react';

export default function SearchField() {
    const searchBookAPI = (e) => {
        e.preventDefault();
        let inputValue = document.getElementById('searchField').value;
        console.log(inputValue);
    };
    return (
        <div>
            <form id="form">
                <input type="text" placeholder="Search Book" id="searchField"></input>
                <button type="submit" onClick={searchBookAPI}>Search</button>
            </form>
        </div>
    )
}
