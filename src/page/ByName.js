import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const ByName = () => {
  const [cocktails, setCocktails] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getCocktail();
  }, [name]);

  const getCocktail = async () => {
    const response = await fetch(`${URL}${name}`);
    const cocktail = await response.json();
    setCocktails(cocktail.drinks);
  };

  const getname = (ev) => {
    ev.preventDefault();
    setName(ev.target.id.value);
  };

  return (
    <>
      <form className="form" onSubmit={getname}>
        <Stack direction="row" spacing={1}>
          <TextField
            id="outlined-basic"
            label="Enter a name"
            variant="outlined"
            name="id"
            autoComplete="off"
          />
          <Button variant="contained" type="submit">
            Go
          </Button>
        </Stack>
      </form>
      <section className="cards">
        {cocktails.map((cocktail) => {
          return (
            <Card
              key={cocktail.idDrink}
              img={cocktail.strDrinkThumb}
              title={cocktail.strDrink}
            />
          );
        })}
      </section>
    </>
  );
};

export default ByName;
