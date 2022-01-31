import { useState, useEffect } from 'react'
import './AnimeCards.css'
import AnimeCard from '../AnimeCard/AnimeCard'
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
        <AnimeCard
          _id={anime.url}
          name={anime.name}
          image={anime.image}
          favoriteCharacter={anime.favoriteCharacter}
          level={anime.level}
          description={anime.description}
          released={anime.released}
          creator={anime.creator}
          key={index}
        />
      ) : null
    )

  return (
    <div className='product-cards'>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default AnimeCards
