import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getAnime, deleteAnime } from "../../services/animeConfig";
import { useParams, Link, Navigate } from "react-router-dom";

const AnimeDetail = (props) => {
  const [anime, setAnime] = useState({
    title: '' ,
  });
  const [isLoaded, setLoaded] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAnime = async () => {
      const product = await getAnime(id);
      setAnime(product);
      setLoaded(true);
    };
    fetchAnime();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await deleteAnime(id, anime);
    setDeleted(true);
  };

  if (isDeleted) {
    return <Navigate to={`/animes`} />;
  }

  if (!isLoaded) {
    return <h1>Loading in Style...</h1>;
  }

  return (
    <Layout>
      <div className="anime-detail">
        <div className="anime-imgs">
              <img
                className="anime-image"
                src={anime.image}
                alt={id}></img>
        </div>
        <div className="details-info">
          <table className="details">
            <tr className="anime"> Title:
              <th className="anime-title" scope="row">
                {anime.title}
              </th>
            </tr>
            <tr className="level">
              <th scope="row">Beginner, Intermediate or Advance Level:</th>
              <td>{anime.level}</td>
            </tr>
            <tr className="style">
              <th scope="row">Released:</th>
              <td>{anime.released}</td>
            </tr>
            <tr className="brand">
              <th scope="row">Who's your Favorite Character:</th>
              <td>{anime.favoriteCharacter}</td>
            </tr>
            <tr className="color">
              <th scope="row">Upload an Image:</th>
              <td>{anime.image}</td>
            </tr>
            <tr className="description">
              <th scope="row">Anime Description:</th>
              <td>{anime.description}</td>
            </tr>
          </table>
          <div className="btn-container">
            <button className="edit-btn">
              <Link className="edit-link" to={`/animes/${id}/edit`}>
                Edit
              </Link>
            </button>
            <button className="delete-btn" onClick={handleSubmit}>
              Delete
            </button>
            <button className="cancel-btn">
              <Link className="cancel-link" to={`/`}>
                Cancel
              </Link>
            </button>
          </div>
          {/* end btn-container */}
        </div>
        {/* end details */}
      </div>
      {/* end info */}
    </Layout>
  );
};

export default AnimeDetail;
