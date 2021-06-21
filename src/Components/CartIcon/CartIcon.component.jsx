import React from "react";
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";
import {connect} from "react-redux";
import {ToggleCartHidden} from "../../Redux/Cart/Cart.actions";
import './CartIcon.styles.scss';
import { selectCartItemCount } from "../../Redux/Cart/Cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ToggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={ToggleCartHidden} >
        <ShoppingIcon className = 'shopping-icon' />
        <span className='item-count' >{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);