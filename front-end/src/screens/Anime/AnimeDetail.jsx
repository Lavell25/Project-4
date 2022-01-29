// import '.AnimeDetails.css'
import { Link } from 'react-router-dom'

const Anime = (props) => {
  return (
    <div className='anime-display'>
      <Link className='card' to={`/animes/${props._id}`}>
          <img className='anime-display-image' src={props.image} alt={props.name} /></Link>
          
    </div>
  )
}

export default Anime