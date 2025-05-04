import React from 'react';
import { AppBar, colors, Container, Link as MuiLink, Toolbar, TextField, InputBase, Button, Typography, Divider, Badge, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { theme } from './theme';
import SearchIcon from '@mui/icons-material/Search';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MenuIcon from '@mui/icons-material/Menu';
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  // [theme.breakpoints.up]



}))
const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 14
}))
const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export default function Navbar() {


  return (
    <>

      <StyledAppBar >

        <Toolbar >
       
          <div style={{ display: 'flex', height: 100, justifyContent: 'space-between', width: '100vw', alignItems: 'center' }}>
          <MenuIcon sx={{display:{
            xs:'block',
            sm:'none'
          }}} />
            <img src='images/logo-main.png' style={{ height: '40px' }} />
            <Box  sx={{ display: 'flex', gap: '10px',display:{xs:'none'
              ,sm:'flex'
            } }}>
              <div style={{ borderRadius: '40px', border: '1px solid #9e9e9e', display: 'flex', alignItems: 'center', height: 50, width: '30vw' }}>
                <SearchIcon sx={{ mr: theme.spacing(0.3), ml: theme.spacing(2), backgroundColor: 'orange', borderRadius: '50%', width: '40px', height: '40px' }} />
                <InputBase placeholder='جستجو کنید...' />

              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, border: '1px solid #9e9e9e', borderRadius: 15, padding: 3 }}>
                <LocationPinIcon />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70px' }}>
                  <StyledTypography component='p'>انتخاب مکان</StyledTypography>
                  <StyledTypography component='span' sx={{ color: 'orange' }}>فیلتر شهر</StyledTypography>
                </div>
              </div>
            </Box>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 15,

            }}>
              <CallOutlinedIcon />
              <Badge badgeContent={5} color='secondary' anchorOrigin={{ horizontal: 'left' }}>
                <ShoppingCartOutlinedIcon />
              </Badge>
              <WbSunnyOutlinedIcon />
              <StyledContainer component='div' style={{ borderRight: '1px solid #9e9e9e' }}>
                <MuiLink component={RouterLink} to='/' underline='none' sx={{
                  mr: '10px',
                  color: 'black',
                  border: '1px solid #9e9e9e',
                  p: 1,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center'


                }}>
                  <PersonOutlineRoundedIcon sx={{ mx: theme.spacing(1), border: '1px solid black', borderRadius: '50%', fontSize: 16 }} /><Typography component='p'>ورود / ثبت نام</Typography>
                </MuiLink>
              </StyledContainer>
            </div>
          </div>

        </Toolbar>

      </StyledAppBar >


    </>
  );
}

