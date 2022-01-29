import { useState, useEffect } from 'react'
import './Animes.css'
import Layout from '../../components/Layout/Layout'
import Anime from '../Anime/AnimeDetail'
// import { Layout, Anime, Search, Sort } from '../../components'
// import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import { getAnimes } from '../../services/animeConfig'

const Animes = (props) => {
  const [animes, setAnimes] = useState([])
  const [searchResult, setSearchResult] = useState([])
  // const [applySort, setApplySort] = useState(false)
  // const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchAnimes = async () => {
      const allAnimes = await getAnimes()
      setAnimes(allAnimes)
      setSearchResult(allAnimes)
    }
    fetchAnimes()
  }, [])


  // const handleSearch = (event) => {
  //   const results = animes.filter((product) =>
  //     product.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   )
  //   setSearchResult(results)
  //   // setApplySort(true)
  // }

  const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout user={props.user}>
      <form onSubmit={handleSubmit} />
      {/* <Sort onSubmit={handleSubmit} /> */}
      <div className='animes'>
        {searchResult.map((animes, index) => {
          return (
            <Anime
              _id={animes._id}
              name={animes.name}
              imgURL={animes.imgURL}
              price={animes.price}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Animes
