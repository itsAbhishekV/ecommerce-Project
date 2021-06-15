import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import FormInput from '../FormInput/FormInput.component'
import './SignIn.styles.scss'
import { SignInWithGoogle } from '../../Firebase/Firebase.util'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span className = 'title'>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit} >

                    <FormInput name = 'email' type = 'email' value = {this.state.email} label = 'Email' handleChange = {this.handleChange} required />
                    <FormInput name = 'password' type = 'password' value = {this.state.password} label = 'Password' handleChange = {this.handleChange} required />

                    <div className = 'buttons'>
                        <CustomButton type = 'submit'> Sign in </CustomButton>
                        <CustomButton isGoogleSignIn onClick = { SignInWithGoogle } > Sign in with google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;