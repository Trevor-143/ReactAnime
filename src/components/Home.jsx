import React, { useState, useEffect } from 'react'

function Home() {
    const [top, setTop] = useState([])
  
    useEffect(() => {
        getAnime()
    }, [])

    const getAnime = () => {
        fetch(`https://api.jikan.moe/v4/top/anime`)
        .then(resp => resp.json())
        .then(data => {
        console.log(data.data)
        setTop(data.data)
        })
    }

    
    

    return (
        <div className="animeList">
        {top.map(anime => {
            return <div className="singleAnime" key={anime.mal_id}>
            <img src={anime.images.webp.image_url} alt={anime.title} />
            <h1> {anime.title} </h1>
            <h4> {anime.rating} </h4>
            </div>
        })}
        </div>
    )
}

export default Home