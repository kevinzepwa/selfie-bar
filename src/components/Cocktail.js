import { useEffect, useState } from "react";
import CocktailList from "./CocktailList";
import NewCocktailForm from "./NewCocktailForm";
import SearchBar from "./SearchBar";


function CocktailsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const demoData = [
    {
      "id": 1,
      "name": "Blue margarita",
      "image": "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
      "price": "434",
      "description": "this is the description"
    }
  ]
  
  const [cocktails, setCocktails] = useState(demoData);
  
  useEffect(() => {
    fetch("https://cocktail-shop-production.up.railway.app/cocktails")
      .then((r) => r.json())
     //.then((cocktailsArray) => {setCocktails(cocktailsArray);
       .then((cocktailsArray) => {setCocktails(cocktailsArray);
      });
  }, []);

  function handleAddCocktail(newCocktail) {
    const updatedCocktailsArray = [...cocktails, newCocktail];
    setCocktails(updatedCocktailsArray);
  }

  const displayedCocktails = cocktails.filter((cocktail) => {
    return cocktail.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewCocktailForm onAddCocktail={handleAddCocktail} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CocktailList cocktails={displayedCocktails} />
    </main>
  );
}

export default CocktailsPage;

