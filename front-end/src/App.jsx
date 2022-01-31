import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import Home from "./screens/Home/Home";
import CreatorDetail from "./screens/Creator/CreatorDetail";
import Animes from "./screens/Animes/Animes";
import Signin from "./screens/Signin/Signin";
import AnimeCreate from "./screens/AnimeCreate/AnimeCreate";
import CreatorPage from "./screens/CreatorsPage/CreatorsPage";
import MakeCreator from "./screens/CreateCreator/MakeCreator";
import AnimeEdit from "./screens/AnimeEdit/AnimeEdit";
import AnimeDetail from "./screens/AnimeDetail/AnimeDetail";


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(true) : setUser(null)
    }
    fetchUser();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signin" element={<Signin setUser={setUser}/>}/>
        <Route path="/creators/" element={<CreatorPage user={user} />} />
        <Route path="/creators/:id" element={<CreatorDetail user={user} />} />
        <Route path="/creators/:id/edit" element={<CreatorDetail user={user} />} />
        <Route path="/creators/create" element={<MakeCreator user={user} />} />
        <Route path="/animes" element={<Animes user={user}/>}/>
        <Route path="/animes/:id/edit" element={<AnimeEdit user={user}/>}/>
        <Route path="/animes/create" element={<AnimeCreate user={user}/>}/>
        <Route path="/animes/:id" element={<AnimeDetail user={user} /> } />
      </Routes>
    </div>
  );
}

export default App;
