import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItem, selectCartItemsTotal } from '../../Redux/Cart/Cart.selectors';
import './CheckoutPage.styles.scss'
import StripeCheckoutButton from '../../Components/Stripebutton/StripeButton.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className = 'checkout-page'>
        <div className = 'checkout-header'>
            <div className = 'header-block'>
                Product
            </div>
            <div className = 'header-block'>
                Name
            </div>
            <div className = 'header-block'>
                Quantity
            </div>
            <div className = 'header-block'>
                Price
            </div>
            <div className = 'header-block'>
                Remove
            </div>
        </div>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CheckoutItem key = {cartItem.id} cartItem = {cartItem} />
                )):            
                <span className = 'empty'>Your cart is empty.!! &nbsp;&nbsp;&nbsp;:/</span>

            }
        <div className = 'total' >
            TOTAL : $ {total}
        </div>
        <div className = 'test-warning'>
            *Please use this test Card to make test Payments*<br/>
            4242 4242 4242 4242 - Exp: 10/23 - CVV: 123
        </div>
        <StripeCheckoutButton price = {total} />
    </div>
)

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);