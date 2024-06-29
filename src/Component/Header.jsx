import { Box, List, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import cart from '../Images/cart.png';
import search from '../Images/search.svg';
import profile from '../Images/profile.svg';
import order from '../Images/order.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState(null);

    const handleItemClick = (index) => {
        setActive(index);
    };
    const navigation= useNavigate();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: '20px' }}>
            <Stack sx={{ marginLeft: '30px', marginTop: '20px' }}>
                <img src={cart} alt="cart" width={"80px"} height={"50px"} />
            </Stack>
            <Stack sx={{ width: '30%' }}>
                <List sx={{ marginLeft: '30px', marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', cursor: 'pointer' }}>
                    {['Home', 'Shop', 'Blog', 'About', 'Contact'].map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index)}
                            style={{
                                color: active === index ? 'orange' : 'black',
                                listStyle: 'none',
                                padding: '10px',
                                cursor: 'pointer',
                            }}
                            onMouseOver={(e) => e.target.style.color = 'orange'}
                            onMouseOut={(e) => e.target.style.color = active === index ? 'orange' : 'black'}
                        >
                            {item}
                        </li>
                    ))}
                </List>
            </Stack>
            <Stack direction={'row'} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: '30px', marginTop: '20px', width: '8%' }}>
                <img src={search} alt="search" width={"30px"} height={"30px"} />
                <img src={profile} alt="profile" width={"30px"} height={"30px"} />
                <Box sx={{position:'relative'}}>
                    <Typography sx={{position:'absolute', top:'-9px', right:'-8px',backgroundColor:'orange',width:'20px',height:'20px',textAlign:'center',color:'white',borderRadius:'15px'}} onClick={()=>navigation('/showAll')}>0</Typography>
                    <img src={order} alt="order" width={"30px"} height={"30px"}  />
                </Box>

            </Stack>
        </Box>
    );
};

export default Header;
