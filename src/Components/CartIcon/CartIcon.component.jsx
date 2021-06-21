import React from "react";
import {ReactComponent as ShoppingIcon} from "../../Assets/shopping-bag.svg";
import {connect} from "react-redux";
import {ToggleCartHidden} from "../../Redux/Cart/Cart.actions";
import './CartIcon.styles.scss';
import { selectCartItemCount } from "../../Redux/Cart/Cart.selectors";

const CartIcon = ({ToggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={ToggleCartHidden} >
        <ShoppingIcon className = 'shopping-icon' />
        <span className='item-count' >{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);