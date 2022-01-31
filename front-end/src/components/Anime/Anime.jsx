import './Anime.css';
import { Link } from 'react-router-dom'

const Anime = ({ title, image, description, url, released, favoriteCharacter, creator, level }) => {
  let id = url.split('/animes/')[1][0]
    return (
      <>
            <Link className="anime" to={`/animes/${id}`}>
                <img className="anime-image" src={image} alt={title} />
                <div className="anime-name">{title}</div>
                <div className="anime-name">{released}</div>
                <div className="anime-name">{favoriteCharacter}</div>
                <div className="anime-name">{level}</div>
                <div className="anime-name">{description}</div>
                <div className="anime-name">{creator}</div>
            </Link>
        </>
    )
}
export default Anime