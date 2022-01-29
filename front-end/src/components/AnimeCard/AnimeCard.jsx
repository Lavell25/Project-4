import './AnimeCard.css';
import { Link } from 'react-router-dom'

const AnimeCard = (props) => {
    return (
        <div className="Anime-card">
            <Link to={`/animes/${props._id}`}>
          <img
            className="anime-card-image"
            src={props.image}
            alt={props.name} />
            <h1>{props.name}</h1>
                <div>View</div>
            </Link>
        </div>
    )
}

export default AnimeCard