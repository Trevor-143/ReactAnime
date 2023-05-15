import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Search() {

    const [ text, setText ] = useState('')

    const navigate = useNavigate()

    const findAnime = (e) => {
        e.preventDefault()
        console.log("Are you looking for", text)
        setText('')
        navigate('/results/'+text)
    }

    return (
        <div className="searchBar">
            <form onSubmit={findAnime}>
                <input type="text" placeholder="search..." onChange={(e) => setText(e.target.value)} />
            </form>
        </div>
    )
}

export default Search