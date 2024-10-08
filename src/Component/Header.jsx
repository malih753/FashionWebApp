import React, { useState } from 'react';
import { Box, List, Stack, Typography, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cart from '../Images/cart.png';
import search from '../Images/search.svg';
import profile from '../Images/profile.svg';
import order from '../Images/order.svg'; 
import './Header.css';
import SignIn from './SignIn';

const Header = () => {
    const [active, setActive] = useState(null);
    const [openSignIn, setOpenSignIn] = useState(false); // Add state to toggle SignIn
    const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const handleItemClick = (index, route) => {
        setActive(index);
        navigate(route);
    };

    // Function to toggle SignIn modal
    const handleProfileClick = () => {
        setOpenSignIn(true);
    };

    const handleCloseSignIn = () => {
        setOpenSignIn(false);
    };

    return (
        <Box className="header-container">
            <Stack className="header-logo">
                <img src={cart} alt="cart" width={"80px"} height={"50px"} />
            </Stack>
            <Stack className="header-nav">
                <List className="header-list">
                    {[
                        { name: 'Home', route: '/' },
                        { name: 'Shop', route: '/shop' },
                        { name: 'Blog', route: '/blog' },
                        { name: 'About', route: '/about' },
                        { name: 'contact', route: '/contact' }
                    ].map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index, item.route)}
                            className={`header-list-item ${active === index ? 'active' : ''}`}
                            onMouseOver={(e) => e.target.style.color = 'orange'}
                            onMouseOut={(e) => e.target.style.color = active === index ? 'orange' : 'black'}
                        >
                            {item.name}
                        </li>
                    ))}
                </List>
            </Stack>
            <Stack direction={'row'} className="header-icons">
                <img src={search} alt="search" width={"30px"} height={"30px"} />
                <img
                    src={profile}
                    alt="profile"
                    width={"30px"}
                    height={"30px"}
                    onClick={handleProfileClick} // Open SignIn modal when clicked
                    style={{ cursor: 'pointer' }}
                />
                <Box className="header-cart-icon">
                    <Typography className="cart-count" onClick={() => navigate('/showAll')}>
                        {cartItems.length}
                    </Typography>
                    <img src={order} alt="order" width={"30px"} height={"30px"} />
                </Box>
            </Stack>

            {/* SignIn Modal */}
            <Modal
                open={openSignIn}
                onClose={handleCloseSignIn}
                aria-labelledby="signin-modal"
                aria-describedby="signin-form"
            >
                <Box className="modal-container">
                    <SignIn />
                </Box>
            </Modal>
        </Box>
    );
};

export default Header;
