import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQantity, removeFromCart } from '../Redux/Store/CartSlice';

const ShowProducts = () => {
    const {cartItems}=useSelector((state)=> state.cart);
    const dispatch=useDispatch();
    const deleteProd=(id)=>{
        dispatch(removeFromCart(id))
    }
    const  increaseQty=(id)=>{      
        dispatch(increaseQantity(id))
    }
    const decreaseQty=(id)=>{
        dispatch(decreaseQuantity(id))
    }
  return (
    <Box sx={{padding:'20px'}}>
        <Stack direction={'row'} justifyContent={'space-evenly'} padding={'20px 10px'}>
             
            <Typography>
                Product Name
            </Typography>
            <Typography>
                Product Price
            </Typography>
            <Typography>
                Product Quantity
            </Typography>   
            <Typography>
                Delete
            </Typography>
        </Stack>
            {
                cartItems.map((item)=>(
                    <Box  display={'flex'} gap={'30px'} justifyContent={'space-evenly'} sx={{border:'1px solid black',marginTop:'10px'}}>
                      
                        <Typography sx={{marginTop:'70px'}}>
                            {item.product_name}
                        </Typography>
                        <Typography sx={{marginTop:'70px'}}>
                            {item.price}
                        </Typography>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'}>
                            <Button sx={{fontSize:'26px',bgcolor:'black',width:'20px',height:'40px',marginRight:'5px'}} onClick={()=>decreaseQty(item._id)}>
                                -
                            </Button>
                            <Typography>
                                {item.qty}
                            </Typography>
                            <Button  sx={{fontSize:'26px',bgcolor:'black',width:'20px',height:'40px',marginLeft:'5px'}} onClick={()=>increaseQty(item._id)}>
                                +
                            </Button>
                        </Stack>
                        <img src={'/cross.svg'} alt={''} width={'2%'}  onClick={()=>deleteProd(item._id)}/>
                    </Box>
                ))
            }
           
       
    </Box>
  )
}

export default ShowProducts;