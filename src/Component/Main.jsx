import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import main from '../Images/main.webp';

const Main = () => {
    return (
        <Stack sx={{position:'relative'}}>
            <Box
                component="img"
                src={main}
                alt={''}
                width={'100%'}
                sx={{
                    width: { sm: '100%', xs: '100%' },
                    height: { sm: '120vh', xs: '45vh' },
                    objectFit: 'cover',
                }}
            />
            <Stack sx={{position:'absolute',top:'20%',right:'-16%',transform:'translate(-50%,-50%)'}}>
                <Typography sx={{color:'orange',fontSize:'65px',fontWeight:'bold'}}>
                Fashion Sale
                </Typography>
                <Typography sx={{color:'white',fontSize:'65px'}}>Minimal Menz Style</Typography>
                <Typography sx={{color:'white' ,fontSize:'22px',width:'750px'}}>
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
                </Typography>
                <Button sx={{backgroundColor:'orange',color:'white',marginTop:'13px',width:'230px'}}>
                    Shop Now
                </Button>
            </Stack>
        </Stack>

    );
}

export default Main;
