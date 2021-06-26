import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const StripePrice = price * 100;
    const PublishableKey = 'pk_test_51J6WdmSAmESQvZXVvAvrrGq9F8W7ocXAn6l3RD8poj3qpwYI9m5PlovbSOFJ1fXq4x5jDaggxtIM2wpdjEOIYltV00S9GbrFG7'

    const onToken = token => {
        console.log(token)
        alert('Payment Successfull')
    }

    return(
        <StripeCheckout
        label = 'Pay NOW'
        panelLabel = "Pay NOW"
        billingAddress
        shippingAddress
        bitcoin
        description = {`Your total price is $${price}`}
        name = "CROWN CLOTHING LTD."
        stripeKey = {PublishableKey}
        token = {onToken}
        amount = {StripePrice}
        image = 'http://svgshare.com/i/CUz.svg'
        />
    )
}

export default StripeCheckoutButton;