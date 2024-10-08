import { createSlice } from "@reduxjs/toolkit";


const initalState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0

}

const CartSlice = createSlice({
    name: 'cart',
    initialState: initalState,
    reducers: {
        addToCart: (state, action) => {
            console.log('state', state.cartItems);
            console.log('payload', action.payload);
            const itemIndex = state.cartItems.findIndex(
                (item) =>

                    item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1
            }
            else {
                state.cartItems = [...state.cartItems, { ...action.payload, qty: 1 }]
            }

        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)

        },
        calculateTotal: (state, action) => {
            const { totalAmount, totalQuantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalAmount += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                { totalAmount: 0, totalQuantity: 0 }
            );
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;
        },
        increaseQantity: (state, action) => {
            const item = state.cartItems.findIndex((item) => item.id === action.payload)
            state.cartItems[item].qty += 1
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.findIndex((item) => item.id === action.payload)
            if (state.cartItems[item].qty > 1) {
                state.cartItems[item].qty -= 1
            }
        },
    }
})
export const { addToCart, removeFromCart, calculateTotal, increaseQantity, decreaseQuantity } = CartSlice.actions
export default CartSlice.reducer