import './Anime.css';
import { Link } from 'react-router-dom'

const Anime = (props) => {
    return (
        <>
            <Link className="anime" to={`/animes/${props._id}`}>
                <img className="anime-image" src={props.image} alt={props.name} />
                <div className="anime-name">{props.name}</div>
            </Link>
        </>
    )
}
export default Anime