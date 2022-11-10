import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Input = () => {
  
    return (
    <form className='form' >
        <Stack direction="row" spacing={1}>
            <TextField 
            id="outlined-basic"
            label="Enter a letter" 
            variant="outlined"
            name="name"
            />

            <Button variant="contained"type="submit">Go</Button>
        </Stack>
    </form>
  )
}

export default Input