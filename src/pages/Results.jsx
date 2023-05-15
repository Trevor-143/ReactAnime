import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Results() {

    const params = useParams()

    const [ found, setFound ] = useState([])

    useEffect(() => {
      getFound(params.text)
    
    }, [params.text])
    
    const getFound = async (name) => {
        const api = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
        const response = await api.json()
        setFound(response.data)
        console.log(response)
    }


    return (
        <div className="animeList">
        {found.map(anime => {
            return <div className="singleAnime" key={anime.mal_id}>
            <Link to={'/infomation/'+anime.mal_id}><img src={anime.images.webp.image_url} alt={anime.title} /></Link>
            <h1> {anime.title} </h1>
            <h4> {anime.rating} </h4>
            </div>
        })}
        </div>
    )
}

export default Results