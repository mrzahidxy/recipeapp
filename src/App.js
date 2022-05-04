import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';

function App() {

  const APP_ID = "f6241762";
  const APP_KEY = "163f983760ffca840961c008dbbc7a5a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes()
  }, [query]);

  //  fetching data from API
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recpies">
        {
          recipes.map(recipe => (
            <Recipe label={recipe.recipe.label}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
              image={recipe.recipe.image}
              dish={recipe.recipe.dishType} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
