// import { Title } from '@mui/icons-material'
import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Box, Container, Pagination } from '@mui/material'
import React, { useState } from 'react'


export default function Maincontent() {
    const [Datas, setDatas] = useState([
        { img: "images/blog-2.jpg", title: "فیلم وسریال" },
        { img: "images/blog-1.jpg", title: "تکنولوژی" },
        { img: "images/blog-3.jpg", title: "طبیعت گردی" },
        { img: "images/blog-4.jpg", title: "کمپ" },
        { img: "images/blog-5.jpg", title: "لوازم جانبی" },
        { img: "images/blog-6.jpg", title: "کاور های محافظتی" },

    ])
    return (
        <Container  sx={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr',gap: '10px', mt: '30px', justifyContent: 'center' }} >
            {Datas.map(data => (<Card key={data.img} sx={{ maxWidth:{lg:290,md:400} }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" color="secondary">
                        اضافه به سبد خرید
                    </Button>
                </CardActions>
            </Card>))}
            <Box sx={{ display: 'flex', justifyContent: 'center', gridColumnStart: '4', gridColumnEnd: '1' }}>
                <Pagination count={10} color="secondary" />
            </Box>
        </Container>
    )
}
