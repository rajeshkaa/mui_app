import {Stack,TextField,FormControl,OutlinedInput,InputLabel,InputAdornment } from "@mui/material"

import * as React from 'react'
    export default function InputAdornments() {
        const [values, setValues] = React.useState({
          amount: '',weight:''
          
        });

        const [value, setValue] = React.useState('')

        console.log(values)
      
        const handleChange = (pro)=>(event) => {
          const {value}=event.target
          console.log(values)
          console.log(value)

          setValues({ ...values, [pro]:value });
        };

        const handleChangee = (pro)=>(event) => {
          const {value}=event.target
          console.log(values)
          console.log(value)

          setValues({ ...values, [pro]:value });
        };

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <TextField label='name' variant="outlined"/>
            <TextField label='name' variant="filled"/>
            <TextField label='name' variant="standard"/>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='small secondary' color="secondary" size='small'/>
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label='form input' required error={!value} onChange={(e)=>setValue(e.target.value)} helperText={!value?'Required':'Do not share your password with anyone'}/>
            <TextField label='password' helperText='Do not share your password with anyone' type='password' disabled/>
            <TextField label='read only' InputProps={{readOnly:true}}/>

        </Stack>

        <Stack spacing={2} direction='row'>
        <FormControl style={{minWidth: 120}}>
          <InputLabel>Amount</InputLabel>
          <OutlinedInput
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
           
          />
        </FormControl>  
        <FormControl style={{minWidth: 120}}>
          <InputLabel>Weight</InputLabel>
          <OutlinedInput
            value={values.weight}
            onChange={handleChangee('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            label="Weight"
           
          />
        </FormControl>  
              </Stack> </Stack>

  )
}

