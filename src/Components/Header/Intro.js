import { Box, Container, styled, Typography, TextField, InputBase, Input } from '@mui/material'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { theme } from './theme';



export default function Intro() {
    const [focusFlag, setFocusFlag] = useState(false)
   
    return (
        <>
            <Box sx={{
                mt: {
                    lg: "180px",
                    md: '120px',
                    xs: "120px",

                }, height: '70vh', backgroundPosition: 'center', borderRadius: '10px', backgroundImage: "url('/images/cover.jpg')", mx: '20px', textAlign: 'center', backgroundRepeat: 'no-repeat'
            }}>
                <Box sx={{ height: '100%', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))", borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: theme.spacing(2), color: '#fff' }}>
                    <Typography variant='h2'>وبلاگ فروشگاه اینترنتی</Typography>
                    <Typography variant='h6'>آخرین مقالات راهنمای خرید و نکات مفید برای تجربه خریدی بهتر</Typography>
                    <Box>
                        <Input onBlur={() => (setFocusFlag(false))} onFocus={() => (setFocusFlag(true))} placeholder='جستجو در مقالات...' endAdornment={<SearchOutlinedIcon />} sx={{ border: focusFlag ? "3px solid orange" : "none", width: '33vw', height: '50px', borderRadius: '25px', px: theme.spacing(2), backgroundColor: '#fff' }} disableUnderline />
                    </Box>
                </Box>

            </Box>
        </>
    )
}

