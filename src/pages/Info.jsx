import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function Info() {

  const [ details, setDetails ] = useState([])
  const [ imgUrl, setImgUrl ] = useState('')
  const [ trailerImgUrl, setTrailerImgUrl ] = useState('')
  const [ aired, setAired ] = useState('')

  const params = useParams()

  useEffect(() => {
    getDetails(params.id)
  }, [params.id])
  

  const getDetails = async (id) => {
    const api = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const res = await api.json()
    console.log(res.data)
    setDetails(res.data)
    setImgUrl(res.data.images.webp.image_url)
    setTrailerImgUrl(res.data.trailer.images.maximum_image_url)
    setAired(res.data.aired.string)
  }

  return (
    <div className="details">
      <div className="detailTop">
        <img className="background" src={trailerImgUrl} alt={details.title} />
        <div className="detailLayer">
          <img src={imgUrl} alt={details.title} />
          <div className="detailMini">
            <h2> {details.title} </h2>
            <h3> {details.source} </h3>
            <h3> {details.episodes} episodes </h3>
            <h3> {details.score} </h3>
          </div>
        </div>
      </div>

      <div className="tags">
        <h4> From {aired} </h4>
        <h4> {details.duration} </h4>
        <h4> {details.rating} </h4>
        <h4> {details.status} </h4>
        <h4> {details.type} </h4>
      </div>

      <div className="desc">
        <h3>{details.title} Synopsis</h3>
        <p>{details.synopsis}</p>
      </div>
    </div>
  )
}

export default Info