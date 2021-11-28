import cls from '../styles/signup.module.css'
import React from 'react'
import Form from '../components/Form'
import Illustration from '../components/Illustration'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <React.Fragment>
            <h1>Create an account</h1>
            <div className='column' >
                <Illustration/>
                <Form className={cls.signup} >
                    <TextInput type='text' InputLogo='person' placeholder='Enter name' />
                    <TextInput type='email' InputLogo='alternate_email' placeholder='Enter email' />
                    <TextInput type='password' InputLogo='lock' placeholder='Enter password' />
                    <TextInput type='password' InputLogo='lock_clock' placeholder='Confirm password' />
                    <CheckBox CheckBoxDetails='I agree to the Terms &amp; Conditions' />
                    <Button BtnName='Submit now' />
                    
            <div class="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
                </Form>
            </div>
        </React.Fragment>
    )
}
