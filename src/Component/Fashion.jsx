import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FashionList from '../Constant/Fashion'; // Ensure the path is correct
import './Fashion.css';

const Fashion = () => {
    return (
        <Box className="fashion-container">
            {FashionList.map((item) => (
                <Stack key={item.id} className="fashion-item">
                    <img src={item.img} alt={item.name} className="fashion-img" />
                    <Typography className="fashion-name">{item.name}</Typography>
                    <Box className="fashion-gradient" />
                    <Box className="hover-content">
                         <Typography className="shop-now">Shop Now</Typography>
                    </Box>
                </Stack>
            ))}
        </Box>
    );
}

export default Fashion;
