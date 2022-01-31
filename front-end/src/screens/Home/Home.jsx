import "./Home.css"
import Layout from "../../components/Layout/Layout";
import AnimeCards from "../../components/AnimeCards/AnimeCards";


const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home-page'>
      <AnimeCards />
      </div>

    </Layout>
  )
}

export default Home