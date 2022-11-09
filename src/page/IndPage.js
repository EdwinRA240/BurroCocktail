import React, { useState, useEffect } from "react";
import Ind from "../components/Ind";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const IndPage = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    getCocktail();
  }, []);

  const getCocktail = async () => {
    const response = await fetch(URL);
    const cocktail = await response.json();
    console.log(cocktail, 'response');
    setCocktails(cocktail.drinks[0]);
  };

  return (
    <>
      <section>
        <Ind
          img={cocktails.strDrinkThumb}
          instrucciones={cocktails.strInstructions}
          title={cocktails.strDrink}
        />
      </section>
    </>
  );
};

export default IndPage;
