import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import FashionList from '../Constant/Fashion'; // Make sure the path is correct

const Fashion = () => {
    return (
        <Box sx={{ display:'flex', flexDirection:'row', justifyContent:'space-between', marginRight:'10%', marginLeft:'10%', marginTop:'5%', marginBottom:'7%' }} >
            {FashionList.map((item) => (
                <Stack key={item.id} sx={{ 
                    marginBottom: '20px', 
                    display:'flex', 
                    flexDirection:'column', 
                    width:'30%', 
                    padding:'10px', 
                    backgroundColor:'white', 
                    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    position: 'relative', 
                    '&:hover .hover-content': {
                        opacity: 1,
                    } 
                }}>
                    <img src={item.img} alt={item.name} width="100%" />
                    <Typography sx={{ marginTop:'10px', position:'absolute', bottom:'60px', color:'white', zIndex:2, fontSize:'20px' }}>{item.name}</Typography>
                    <Box sx={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '30%', 
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)' 
                    }} />
                    <Box className="hover-content" sx={{ 
                        position: 'absolute', 
                        bottom:'10px',
                        left:'50%',
                        transform: 'translate(-50%, -50%)', 
                        opacity: 0, 
                        transition: 'opacity 0.3s ease', 
                        zIndex: 3 
                    }}>
                         <Typography sx={{color:'white',fontSize:'18px',textDecoration:'underline',cursor:'pointer'}}>Shop Now</Typography>
                    </Box>
                </Stack>
            ))}
        </Box>
    );
}

export default Fashion;
