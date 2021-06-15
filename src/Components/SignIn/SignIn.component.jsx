import React from 'react';
import './SignIn.styles.scss';
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: '' })
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span className = 'title'>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput type='email'
                               onChange={this.handleChange}
                               name='email'
                               value={this.state.email}
                               label='Email' required />
                    <FormInput type='password'
                               onChange={this.handleChange}
                               name='password'
                               value={this.state.password}
                               label='Password' required />
                    <CustomButton type = 'submit' >Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;