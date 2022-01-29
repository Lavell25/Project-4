import { useState, useEffect } from 'react'
import './AnimeCards.css'
import AnimeDetails from '../AnimeDetail/AnimeDetail'
import { getAnimes } from '../../services/animeConfig'

const AnimeCards = () => {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    const fetchAnimes = async () => {
      const allAnimes = await getAnimes()
      setAnimes(allAnimes)
    }
    fetchAnimes()
  }, [])

  const CARDS = animes
    .reverse()
    .map((anime, index) =>
      index < 8 ? (
        <AnimeDetails
          _id={anime._id}
          name={anime.name}
          imgURL={anime.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='product-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default AnimeCards
