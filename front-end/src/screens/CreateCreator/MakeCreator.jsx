import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createCreator } from '../../services/creatorConfig'
import Layout from '../../components/Layout/Layout'



function MakeCreator(props) {

  let navigate = useNavigate()

  const [creatorCreate, setCreatorCreate] = useState({
    name: '',
    country: '',
    image: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setCreatorCreate({
      ...creatorCreate,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createCreator(creatorCreate)
    navigate(`/creators`)
  }


  const { name, country, image } = creatorCreate;

  return (
    <Layout user={props.user}>
      <div className='edit-form'>
        <form onSubmit={handleSubmit}>
        <h1 className='creator-edit-'>Add Creator</h1>
          <div className='input-section'>
            <label className='label'>Name:</label>
            <input
              className='input'
              value={name}
              name='name'
              required
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className='input-section'>
            <label className='label'>Country:</label>
            <input
              className='input'
              value={country}
              name='country'
              required
              onChange={handleChange}
            />
          </div>

          <div className='input-section'>
            <label className='label'>Upload an Image:</label>
            <input
              className='input'
              value={image}
              name='image'
              required
              onChange={handleChange}
            />
          </div>
          <button className='submit' type='submit'>Submit</button>
        </form>
      </div>
    </Layout>

  )

}

export default MakeCreator;