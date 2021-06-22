import React from "react";
import './CustoButton.styles.scss';

const CustomButton = ({children, inverted, isGoogleSignIn, ...otherButtonProps}) => (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button \`} custom-button `}  {...otherButtonProps} >
            {children}
        </button>
)
export default CustomButton;