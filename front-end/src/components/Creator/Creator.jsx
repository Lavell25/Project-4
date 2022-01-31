import { Link } from 'react-router-dom'

const Creator = (name, url, country) => {
  let id = url.split('/animes/')[1][0]
  return (
    <div className='anime-display'>
      <Link className='card' to={`/creator/${id}`}>
          <img className='anime-display-image' src={name} alt={country} /></Link>
          
    </div>
  )
}

export default Creator