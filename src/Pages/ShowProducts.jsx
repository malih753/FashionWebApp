import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQantity, removeFromCart } from '../Redux/Store/CartSlice';
import '../Component/ShowProducts.css';
import crossIcon from '../Images/cross.png';

const ShowProducts = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const deleteProd = (id) => {
        dispatch(removeFromCart(id));
    };

    const increaseQty = (id) => {
        dispatch(increaseQantity(id));
    };

    const decreaseQty = (id) => {
        dispatch(decreaseQuantity(id));
    };

    return (
        <div className="products-container">
            <div className="header-row">
                <span>Product Image</span>
                <span>Product Name</span>
                <span>Product Price</span>
                <span>Product Quantity</span>
                <span>Delete</span>
            </div>

            {cartItems.map((item, index) => (
                <div className="product-row" key={index}>
                    <img src={item.image} alt={item.name} className="product-image" />
                    <span className="product-name">{item.name}</span>
                    <span className="product-price">{item.price}</span>
                    <div className="quantity-control">
                        <button className="quantity-btn" onClick={() => decreaseQty(item.id)}>-</button>
                        <span className="product-qty">{item.qty}</span>
                        <button className="quantity-btn" onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                    <img
                        src={crossIcon}
                        alt="delete"
                        className="delete-icon"
                        onClick={() => deleteProd(item._id)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ShowProducts;
