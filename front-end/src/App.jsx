import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react";
import { verifyUser } from "./services/users";
import Home from "./screens/Home/Home";
import CreatorDetail from "./screens/Creator/CreatorDetail";
import Animes from "./screens/Animes/Animes";


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/creator/" element={<CreatorDetail />} />
        <Route path="/creators/" element={<p>this is the creators screen</p>} />
        <Route path="/anime" element={<Animes user={user}/>}/>
        <Route path="/animes" element={<p>This is the animes screen</p>}/>

      </Routes>
    </div>
  );
}

export default App;
