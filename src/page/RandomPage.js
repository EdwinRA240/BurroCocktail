import React from "react";

const URL = "www.thecocktaildb.com/api/json/v1/1/random.php";

function RandomPage() {
  const [RandCocktail, setRandCocktail] = React.useState({});

  React.useEffect(() => {
    console.log("en el use effect");
    getCocktail();
  }, []);

  const getCocktail = async () => {
    const response = await fetch(URL);
    const cocktail = await response.json();
    console.log(cocktail);
    setRandCocktail(cocktail);
  };

  return (
    <>
      <h1>{RandCocktail.strDrink}</h1>
    </>
  );
}

export default RandomPage;
