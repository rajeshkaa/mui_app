import React from 'react'

import {Box,TextField,MenuItem} from '@mui/material'
export default function Select() {
    const [countries,setcountries]=React.useState([])
    console.log(countries);
const handleCountry=(event)=>{
  const val=event.target.value
  setcountries(typeof(val) === 'string' ? val.split(',') : val)
  setcountries()
}
  return (
    <Box width='250px'>
        <TextField label='select country' select fullWidth onChange={handleCountry} value={countries}
          multiple
        >
            <MenuItem value='India'>India</MenuItem>
            <MenuItem value='USA'>USA</MenuItem>

            <MenuItem value='AUSTRAILA'>AUSTRAILA</MenuItem>

        </TextField>
    </Box>
  )
}

