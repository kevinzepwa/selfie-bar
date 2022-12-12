import { useState } from "react";

function CocktailCard({ cocktail }) {
  const { name, image, price, description } = cocktail;

  const [isAvailable, setAvailable] = useState(true);
  const [liked, setLiked] = useState(true);

  function handleToggleAvailable() {
    setAvailable((isAvailable) => !isAvailable);
  }
  function handleLike() {
    setLiked((isLiked) => !isLiked);
  }

  return (
    <li className="card" id="ourCocktails">
      <img className="h-45" src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      {isAvailable ? (
        <button className="card-btn" onClick={handleToggleAvailable}>
          Cocktail is available
        </button>
      ) : (
        <button onClick={handleToggleAvailable}>We have just sold it</button>
      )}
      <button className="card-btn" onClick={handleLike}>
          Like
      </button>
    </li>
  );
}

export default CocktailCard;
