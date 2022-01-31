import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getAnime, updateAnime } from '../../services/animeConfig'
import './AnimeEdit.css'

const AnimeEdit = (props) => {

  let navigate = useNavigate()

  const [anime, setAnime] = useState({
    title: '',
    description: '',
    image: '',
    released: '',
    favortieCharacter: '',
    level: '',
    creator: '',
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchAnime = async () => {
      const anime = await getAnime(id)
      setAnime(anime)
    }
    fetchAnime()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setAnime({
      ...anime,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateAnime(id, anime)
    navigate(`/animes/${id}`)
  }

  return (
    <Layout user={props.user}>
      <div className='product-edit'>
        <div className='image-container'>
          <img
            className='edit-product-image'
            src={anime.image}
            alt={anime.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={anime.image}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Title'
            value={anime.creator}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-character'
            placeholder='Favorite Character'
            value={anime.favortieCharacter}
            name='favortieCharacter'
            required
            onChange={handleChange}
          />
          <input
            className='input-character'
            placeholder='Level'
            value={anime.level}
            name='level'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={anime.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default AnimeEdit
