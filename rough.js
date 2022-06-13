// import logo from './logo.svg';
import './App.css';
// import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import {Typography,AppBar, Toolbar, Container, ImageListItem, ImageList, TextField} from "@material-ui/core"
// import imagesData from './dummy.json'

// const p='raj'
import {Stack,ToggleButton,ToggleButtonGroup} from '@mui/material'

import React, {useState} from 'react'
const App = () =>{

  const [format, setFormat] = useState(null);

  console.log({format})
  const handleFormat = ( event,forr) => {
    console.log(forr)
    setFormat(forr);
  };

return(
<div className='App'>
  <Stack direction='row'>
 <ToggleButtonGroup
 value={format}
      onChange={handleFormat} color='success' size='small' orientation='vertical' exclusive
    >
      <ToggleButton value="bold" >
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" >
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" >
        <FormatUnderlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  </Stack>
  </div>
  )
    }

//   return (
//     <div>
//     <AppBar>
//       <Toolbar>
//       <Typography variant="h5">hello world</Typography>
//       </Toolbar>
//       </AppBar>
//       <Container style={{"marginTop":"70px","textAlign":"center"}}>
//         <Typography variant="h2">our latest version of photography</Typography>
//         <Typography paragraph>pleasure to take your photos as well. please fill the below form to invite the requests</Typography>
//       </Container>
//       <Container>
//         <ImageList rowHeight={170} cols={4}>
// {imagesData.map(imgobj=>
//   <ImageListItem key={imgobj.id}>
//     <img src={imgobj.url} alt={imgobj.title}/>
//   </ImageListItem>)}
//         </ImageList>
//       </Container>
//       <center>
//       <Container>
//         <Typography variant="h3">Contact Form</Typography>
//         <form>
//           <TextField style={{"width":"500px","margin":"5px"}} type="text" label="Name" variant="outlined" ></TextField><br/>
//           <TextField style={{"width":"500px","margin":"5px"}} type="email" label="Email" variant="outlined" ></TextField><br/>
//           <TextField style={{"width":"500px","margin":"5px"}} type="text" label="Proposal" variant="outlined" ></TextField><br/>
//           <TextField style={{"width":"500px","margin":"5px"}} type="text" label="address" variant="outlined" ></TextField>

//         </form>
//       </Container>
//       </center>
  //     </div>
  // );


export default App;
