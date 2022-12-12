import CocktailCard from "./CocktailCard";

function CocktailList({ cocktails }) {
  return (
    <>
    <h3 className="cocktails-title">Our Cocktails</h3>
        <ul className="cards">
          {cocktails.map((cocktail) => {
            return <CocktailCard key={cocktail.id} cocktail={cocktail} />;
          })}
        </ul>
    </>
  );
}

export default CocktailList;