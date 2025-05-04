import React from 'react'
import Header from './Components/Header/Header'
import Intro from './Components/Header/Intro'
import { Grid } from '@mui/material'
export default function App() {
  return (
    <div >
      
      <Header />
      <Intro />
      <Grid container>
        <Grid item size={8}>
            
        </Grid>
        <Grid item size={4}>

        </Grid>
      </Grid>
     
    </div>
  )
}

