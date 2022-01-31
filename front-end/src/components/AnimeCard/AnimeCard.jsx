import './AnimeCard.css';
import { Link } from 'react-router-dom'

const AnimeCard = (props) => {
  return (
        <div className="Anime-card">
            <Link to={`/animes/`}>
          <img
            className="anime-card-image"
            src={props.image}
            alt={props.creator} />
            </Link>
        </div>
    )
}

export default AnimeCard