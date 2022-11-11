import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Ind from "../components/Ind";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const RandomPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [rand, setRand] = useState(true);

  useEffect(() => {
    getCocktail();
  }, [rand]);

  const getCocktail = async () => {
    const response = await fetch(URL);
    const cocktail = await response.json();
    setCocktails(cocktail.drinks[0]);
  };

  return (
    <>
      <section>
        <Ind
          img={cocktails.strDrinkThumb}
          instrucciones={cocktails.strInstructions}
          title={cocktails.strDrink}
          ingredientes={[
            cocktails.strIngredient1,
            cocktails.strIngredient2,
            cocktails.strIngredient3,
            cocktails.strIngredient4,
            cocktails.strIngredient5,
            cocktails.strIngredient6,
          ]}
        />
      </section>
      <div className="button">
        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            return rand === true ? setRand(false) : setRand(true);
          }}
        >
          Random
        </Button>
      </div>
    </>
  );
};

export default RandomPage;
