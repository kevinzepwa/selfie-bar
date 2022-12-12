import { useState } from "react";

function NewCocktailForm({ onAddCocktail }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
        description: description,
      }),
    })
      .then((r) => r.json())
      .then((newCocktail) => onAddCocktail(newCocktail));
  }

  return (
    <div className="new-cocktail-form">
      <h2>New Cocktail</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Cocktail name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button className="text-yellow-600" type="submit">Add Cocktail</button>
      </form>
    </div>
  );
}

export default NewCocktailForm;
