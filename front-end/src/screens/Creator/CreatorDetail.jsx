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
        <h4>{creator.name}</h4>
      </div>
    </Layout>
  );
};

export default CreatorDetail;