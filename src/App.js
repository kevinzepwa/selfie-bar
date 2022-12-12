// client/src/components/App.js
import { useState, useEffect } from "react";
import Cocktail from "./components/Cocktail";
import Navbar from "./components/Navbar";
//import SearchBar from './components/SearchBar';

function App() {
  //const [cocktails, setCocktails] = useState([]);

  //useEffect(() => {
  //  //fetch("https://cocktail-shop-production.up.railway.app/cocktails/1")
  //  fetch("https://fakestoreapi.com/products")
  //  .then((response) => response.json())
  //  .then((data) => setCocktails(data))
  //},[cocktails])

  //console.log(cocktails)

  //<Cocktail cocktails={cocktails}/>
  
  return (
    <>
      <Navbar />
      <Cocktail />
    </>
  );
}

export default App;