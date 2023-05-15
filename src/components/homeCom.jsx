import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Home() {
    const [top, setTop] = useState([])
    const [ topAnime, setTopAnime ] = useState([])
    const [ topAnimeTImg, setTopAnimeTImg ] = useState('')
    const [ topAnimeImg, setTopAnimeImg ] = useState('')
  
    useEffect(() => {
        getAnime()
    }, [])

    const getAnime = () => {
        fetch(`https://api.jikan.moe/v4/top/anime`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.data)
            setTop(data.data)
            setTopAnime(data.data[1])
            setTopAnimeTImg(data.data[1].trailer.images.maximum_image_url)
            setTopAnimeImg(data.data[1].images.webp.image_url)
        })
    }

    
    

    return (
        <>
            <div className="featured">
                <img className="topBack" src={topAnimeTImg} alt={topAnime.title} />
                <div className="topLayer">
                    <Link to={'/infomation/'+topAnime.mal_id} ><img src={topAnimeImg} alt={topAnime.title} /></Link>
                    <div className="sideInfo">
                        <h3>{topAnime.title}</h3>
                        <h4>{topAnime.rating}</h4>
                        <p>{topAnime.synopsis}</p>
                        <h4 className="score">{topAnime.score}</h4>
                    </div>
                </div>
            </div>
            <div className="animeList">
            {top.map(anime => {
                return <div className="singleAnime" key={anime.mal_id}>
                    <Link to={'/infomation/'+anime.mal_id}><img src={anime.images.webp.image_url} alt={anime.title} /></Link>
                    <h1> {anime.title} </h1>
                    <h4> {anime.rating} </h4>
                </div>
            })}
            </div>
        </>
    )
}

export default Home