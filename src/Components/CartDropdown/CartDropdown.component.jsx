import React from "react";
import './CartDropdown.styles.scss';
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";
import { selectCartItem } from "../../Redux/Cart/Cart.selectors";
import { createStructuredSelector } from "reselect";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((cartItem)=> (
                    <CartItem key = {cartItem.id} item = {cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default connect(mapStateToProps)(CartDropdown);