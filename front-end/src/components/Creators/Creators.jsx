import { useState, useEffect } from 'react'
import { getCreators } from '../../services/creatorConfig'
import { Link } from 'react-router-dom'
import './Creators.css'

const Creators = (url) => {
  const [creators, setCreators] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchCreators = async () => {
      const allCreators = await getCreators()
      setCreators(allCreators)
      setLoaded(true)
    }
    fetchCreators()
  }, [])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div>
      <div>
      <h1 className='all-creator-title'>Creator List</h1>
        <p className='all-creator-sentence'> Want to add a Creator?
          <Link to="/creators/create" style={{ textDecoration: "underline" }}> Click Here!</Link></p>
        {creators.map(creator => (
          <Link to={`/creators/${creator.id}`}>
            <div className='creator-container'>
              <img src={creator.image} alt={creator.name} className="creator-card-img"/>
              <h2 className="creator-card">{creator.name}</h2>
              <p><em>Read More</em></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Creators