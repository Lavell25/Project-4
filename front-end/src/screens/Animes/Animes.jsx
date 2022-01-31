import { useState, useEffect } from 'react'
import './Animes.css'
import Layout from '../../components/Layout/Layout'
import Anime from '../../components/Anime/Anime'
import { getAnimes } from '../../services/animeConfig'

const Animes = (props) => {
  const [animes, setAnimes] = useState([])
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const fetchAnimes = async () => {
      const allAnimes = await getAnimes()
      setAnimes(allAnimes)
      setSearchResult(allAnimes)
    }
    fetchAnimes()
  }, [])

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout user={props.user}>
      <form onSubmit={handleSubmit} />
      <div className='animes'>
        {animes.map((anime, index) => (
            <Anime
              url={anime.url}
              title={anime.title}
              image={anime.image}
              description={anime.description}
              released={anime.released}
              level={anime.level}
              favoriteCharacter={anime.favoriteCharacter}
              creator={anime.creator}
              key={index}
            />
          )
        )}
      </div>
    </Layout>
  )
}

export default Animes
