import React from "react";
import './SignInAndSignUp.pages.styles.scss';
import SignIn from "../../Components/SignIn/SignIn.component";
import SignUp from "../../Components/SignUp/SignUp.component";

const SignInAndSignUp = () => (
    <div className='SignInAndSignUp'>
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSignUp;