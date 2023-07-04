import {useEffect,useState} from "react"
import Recipe from "./recipe.js" 
import './App.css';

function App() {
  const APP_ID="f79c5a28";
  const APP_KEY = "947d58077e50c3795b09d10dabfe4567";

  const [recepies,setRecepies] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  const url=
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  

  useEffect(() => {
    getRecipes();
  },[query])

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecepies(data.hits)
  }
  let handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
    
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={handleSearch}/>
        <button className="search-button" >Search</button>
      </form>
      <div className="recipes">
      {recepies.map(recipe => <Recipe key={recipe.recipe.label} title={recipe.recipe.label} 
      calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />)}
      </div>
    </div>
  )




}

export default App;
