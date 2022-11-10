import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

function RandomPage() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getCocktail();
  }, []);

  const getCocktail = async () => {
    const response = await fetch(URL);
    const cocktail = await response.json();
    setCocktails(cocktail.drinks);
  };

  return (
    <>
    <Input/>
    <section className="cards">
      {cocktails.map((cocktail) => {
        return <Card key={cocktail.idDrink} img={cocktail.strDrinkThumb} title={cocktail.strDrink} />;
      })}
    </section>
    </>
  );
}

export default RandomPage;
