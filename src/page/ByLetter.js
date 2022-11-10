import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// import Input from "../components/Input";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

function RandomPage() {
  const [cocktails, setCocktails] = useState([]);
  const [letter, setLetter] = useState("A");

  useEffect(() => {
    getCocktail();
  }, [letter]);

  const getCocktail = async () => {
    const response = await fetch(`${URL}${letter}`);
    const cocktail = await response.json();
    setCocktails(cocktail.drinks);
  };

  const getLetter = (ev) =>{
    ev.preventDefault();
    setLetter(ev.target.id.value);
  };

  return (
    <>
    <form className='form' onSubmit={getLetter}>
        <Stack direction="row" spacing={1}>
            <TextField 
            id="outlined-basic"
            label="Enter a letter" 
            variant="outlined"
            name="id"
            autoComplete="off"
            />
            <Button variant="contained"type="submit">Go</Button>
        </Stack>
    </form>
    <section className="cards">
      {cocktails.map((cocktail) => {
        return <Card key={cocktail.idDrink} img={cocktail.strDrinkThumb} title={cocktail.strDrink} />;
      })}
    </section>
    </>
  );
}

export default RandomPage;
