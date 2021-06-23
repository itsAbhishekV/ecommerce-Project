import React from 'react';
import { connect } from 'react-redux';
import { clearCart, addItem, removeItem } from '../../Redux/Cart/Cart.actions';
import './CheckoutItem.styles.scss'

const CheckoutItem = ({cartItem, addItem, removeItem, clearCart}) => {
    const {imageUrl, name, price, quantity} = cartItem;

    return(
        <div className = 'checkout-item'>
            <div className = 'image-container'>
                <img src = {imageUrl} alt = 'item' />
            </div>
            <span className = 'name'>{name}</span>
            <div className = 'quantity'>
                <div onClick = {() => removeItem(cartItem)} className = 'arrow'>
                    &#10094;
                </div>
                    <span className = 'value'>{quantity}</span>
                <divnull onClick = {() => addItem(cartItem)} className = 'arrow'>
                    &#10095;
                </divnull>
            </div>
            <span className = 'price'>{price}</span>
            <div onClick = {() => clearCart(cartItem)} className = 'remove-button'>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart: item => dispatch(clearCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);