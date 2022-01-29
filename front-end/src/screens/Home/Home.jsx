import "./Home.css"
import Layout from "../../components/Layout/Layout";
import Animes from "../Animes/Animes";


const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home-page'>
      <Animes />
      </div>

    </Layout>
  )
}

export default Home