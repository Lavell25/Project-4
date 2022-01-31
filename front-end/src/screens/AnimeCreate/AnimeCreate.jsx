import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { createAnime } from '../../services/animeConfig'
import Layout from '../../components/Layout/Layout'
import './AnimeCreate.css'


function AnimeCreate(props) {

  let navigate = useNavigate()

  const [animeCreate, setAnimeCreate] = useState({
    title: '',
    released: '',
    level: '',
    image: '',
    description: '',
    favortieCharacter: '',
    // creator: [],
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setAnimeCreate({
      ...animeCreate,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createAnime(animeCreate)
    navigate('/animes')
  }


  const { title, released, level, image, description, favortieCharacter,  } = animeCreate;

  return (
    <Layout>
      <div className='edit-form'>
        <form onSubmit={handleSubmit}>
        <h1 className='anime-edit-title'>Add Anime</h1>
          <div className='input-section'>
            <label className='label'>Title:</label>
            <input
              className='input'
              value={title}
              name='title'
              autoFocus
              required
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Released:</label>
            <input
              className='input'
              value={released}
              name='released'
              onChange={handleChange}
            />
          </div>

          <div className='input-section'>
            <label className='label'>Description:</label>
            <input
              className='description'
              rows={10}
              value={description}
              name='description'
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Image:</label>
            <input
              className='input'
              value={image}
              name='image'
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Level:</label>
            <input
              className='input'
              value={level}
              name='level'
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Favorite Character:</label>
            <input
              className='input'
              value={favortieCharacter}
              name='favortieCharacter'
              onChange={handleChange}
            />
          </div>
          <button className='submit' type='submit'>Submit</button>
        </form>
      </div>
    </Layout>

  )

}

export default AnimeCreate