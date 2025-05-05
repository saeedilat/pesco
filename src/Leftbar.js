import { Container, Typography ,List,ListItem,ListItemButton,ListItemIcon,ListItemText,ListSubheader, styled} from '@mui/material'
import React, { useState } from 'react'
import InboxIcon from '@mui/icons-material/Inbox'
import MailIcon from '@mui/icons-material/Mail'
import { theme } from './Components/Header/theme'



export default function Leftbar() {
    const [listItem,setListItem]=useState([{title:'تکنولوژی',num:4 },{title:'خرید اینترنتی',num:16} ,{title:'گجت ها',num:25} ,{title:'صوت وتصویر',num:12} ,{title:'نقد وبررسی',num:17}])
    return (
        <Container sx={{mt:'30px',boxShadow:'1px 1px 20px #fff',borderRadius:'25px'}}>
            <List subheader={
       <Typography variant='h5' sx={{borderBottom:'5px solid orange',borderRadius:'7px',py:'10px',pr:'10px'}}>دسته بندی ها</Typography>
      }>
            
              {listItem.map(item=>(
                <ListItemButton key={item.num}>
                <ListItem sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>{item.title}</Typography>
                    <Typography sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'30px',height:'30px',borderRadius:"50%",boxShadow:'1px 1px 10px #fff', alignItems:'center'}}>{item.num}</Typography>
                </ListItem>
                </ListItemButton>
              ))}
        
            </List>
        </Container>
    )
}
