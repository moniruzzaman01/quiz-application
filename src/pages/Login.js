import cls from '../styles/login.module.css'
import React from 'react'
import Form from '../components/Form'
import Illustration from '../components/Illustration'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <React.Fragment>
            <h1>Login to your account.</h1>
            <div className='column'>
                <Illustration/>
                <Form className={cls.login} >
                    <TextInput type='text' placeholder='Enter email' InputLogo='alternate_email' />
                    <TextInput type='password' placeholder='Enter password' InputLogo='lock' />
                    <Button BtnName='Login' />
                    <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </React.Fragment>
    )
}
