import axios from "axios"

// const api = axios.create({
//   baseURL:
//     process.env.NODE_ENV === "production"
//       ? "anime-database1.herokuapp.com"
//       : "http://localhost:8000/",
// });

const api = axios.create({
  baseURL: "anime-database1.herokuapp.com"   
});


export default api;