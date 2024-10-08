import React,{useState} from 'react';
 

import { Box, Button, Stack, Typography } from '@mui/material';
import ProductData from '../Constant/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Store/CartSlice';

export default function ShopProducts() {
   
  const dispatch =useDispatch();
  const addCart=(prod)=>{
    console.log('add the product')
    dispatch(addToCart(prod));
  }
  return (
    <Box  sx={{display:'flex' ,marginRight:'30px',marginLeft:'30px'}}>
       
        {ProductData.map((item, index) => (
         
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'center',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',marginBottom:'30px',width:'30%',marginLeft:'40px'  }}>

                <img src={item.image} alt={item.name} width="100%" />
            
              <Stack sx={{ marginLeft: '20px', width: '90%' }}>
                <Typography variant="h6"  >{item.name}</Typography>
                <Stack direction={'row'} justifyContent="space-between" alignItems="center" sx={{ marginTop: '10px' }}>
                  <Typography>{item.price}</Typography>
                  <Typography sx={{ marginLeft: '10px' }}>{item.distPrice}</Typography>
                  <Button sx={{ color: 'white', backgroundColor: 'orange', marginLeft: '20px',cursor:'pointer' }} onClick={()=>addCart(item)}>Add To Cart</Button>
                </Stack>
              </Stack>
            </Box>
           
        ))}
    
    </Box>
  );
}
