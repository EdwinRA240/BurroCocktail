import { useState, useEffect } from 'react'
const URL = "www.thecocktaildb.com/api/json/v1/1/random.php";


export const useFetch = () => {
    const [characters, setCharacters] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
      getCharacter();
    }, []);

    const getCharacter = async () =>{
        try {
            const res = await fetch(URL);
    
            if (!res.ok) {
                console.log(res);
            }
            const data = await res.json();
            console.log([...data]);
            setCharacters([...data]);
        } catch (error) {
            console.log(error);
        } 
    }
    
    return characters
};