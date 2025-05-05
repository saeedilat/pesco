import React from 'react'
import Header from './Components/Header/Header'
import Intro from './Components/Header/Intro'
import { Grid } from '@mui/material'
import Maincontent from './Maincontent'
import Leftbar from './Leftbar'
export default function App() {
  return (
    <div >

      <Header />
      <Intro />
      <Grid container sx={{display:'flex' ,justifyContent:'center'}}>
        <Grid item 
        xs={12}
        lg={9}
        
        >
          {/* sx={{ flexGrow: 1, width: "100%" }} */}
          <Maincontent />
        </Grid>
        <Grid item 
        xs={0}
        lg={3}
        sx={{display:{xs:'none',lg:'inline'},width:'20%'}}
        >
          <Leftbar/>
        </Grid>
      </Grid>

    </div>
  )
}

