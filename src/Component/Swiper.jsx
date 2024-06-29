import React,{useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { Box, Button, Stack, Typography } from '@mui/material';
import ProductData from '../Constant/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Store/CartSlice';

export default function ShopProducts() {
  const [product,setProduct]=useState([]);
  const dispatch =useDispatch();
  const addCart=(prod)=>{
    console.log('add the product')
    dispatch(addToCart(prod));
  }
  return (
    <Box padding={'50px 20px'}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper p-4"
      >
        {ProductData.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px', alignItems: 'center',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',marginBottom:'20px',marginLeft:'190px',width:'90%' }}>
              
                <img src={item.image} alt={item.name} width="100%" />
            
              <Stack sx={{ marginLeft: '20px', width: '90%' }}>
                <Typography variant="h6"  >{item.name}</Typography>
                <Stack direction={'row'} justifyContent="space-between" alignItems="center" sx={{ marginTop: '10px' }}>
                  <Typography>{item.price}</Typography>
                  <Typography sx={{ marginLeft: '10px' }}>{item.distPrice}</Typography>
                  <Button sx={{ color: 'white', backgroundColor: 'orange', marginLeft: '20px',cursor:'pointer' }} onClick={()=>addCart(product)}>Add To Cart</Button>
                </Stack>
              </Stack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
