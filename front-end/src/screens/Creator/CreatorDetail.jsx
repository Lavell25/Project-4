import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getCreators} from "../../services/creatorConfig";
import { useParams } from "react-router-dom";


const CreatorDetail = (props) => {
  const [creator, setCreator] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  console.log(props)
  useEffect(() => {
    const fetchCreator = async () => {
      const creator = await getCreators();
      setCreator(creator);
      setLoaded(true);
    };
    fetchCreator()
  }, [id]);

  if (!isLoaded) {
    return <h1>Hey</h1>
  }


  return (
    
    <Layout>
      <div className="creator-detail">
      <div className="anime-imgs">
              <img
                className="anime-image"
                src={creator.image}
                alt={id}></img>
        </div>
        <div className="level">
             Beginner, Intermediate or Advance Level:</div>
              <div className="creator-name">{creator.name}</div>
            </div>
            <div className="style"> Released:</div>
              <div>{creator.country}</div>
    </Layout>
  );
};

export default CreatorDetail;