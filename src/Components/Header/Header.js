import React, { useState } from 'react'
import Navbar from './Navbar'
import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography, Link as MUiLink, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { theme } from './theme';
import { Link as RouterLink } from 'react-router-dom';


const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({

  '&:hover': {
    color: 'orange',
    backgroundColor: '#fff'
  }
}))

export default function Header() {
  const [menu, setMenu] = useState([
    { item: 'فروشگاه', icon: <StorefrontOutlinedIcon /> },
    { item: 'صفحه اصلی', icon: <HomeOutlinedIcon /> },
    { item: 'لیست کالاها', icon: <MenuIcon /> },
    { item: 'سوالی دارید', icon: <SentimentSatisfiedOutlinedIcon /> },
    { item: 'پیگیری سفارش', icon: <RocketLaunchOutlinedIcon /> },
    { item: 'بلاگ', icon: <WidgetsOutlinedIcon /> },
    { item: 'تماس باما', icon: <CallOutlinedIcon /> },
  ])
  return (
    <div>
      <Navbar />
      <StyledContainer>
        <AppBar sx={{ boxShadow: 'none', mt: "100px", backgroundColor: '#fff' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: theme.spacing(1) }}>
              {menu.map(item => (

                <StyledMenuItem key={item.item}>
                  {item.icon}
                  <Typography sx={{ mr: 1, opacity: '0.8' }}>{item.item}</Typography>
                </StyledMenuItem>

              ))}
            </Box>
            <Box sx={{}}>
              <MUiLink component={RouterLink} to='/spacial' sx={{ color: 'black', borderBottom: '2px solid orange', pb: '5px', }} underline='none'>فروش ویژه</MUiLink>

            </Box>
          </Toolbar>
        </AppBar>
      </StyledContainer>
    </div>
  )
}
