import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsTotal = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((acc, cartItem)=> acc + cartItem.quantity * cartItem.price, 0)
)
