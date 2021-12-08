import React,{useState} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import Form from './Form'
import TextInput from './TextInput'
import Button from './Button'

export default function LoginForm() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError]=useState('')
    const [loading, setLoading]=useState()


    const {Login}=useAuth();
    const navigate=useNavigate();

    async function FormHandle(event){
        event.preventDefault();

        try{
            setError('')
            setLoading(true)
            await Login(email, password)
            navigate("/")
        }
        catch(err){
            console.log(err)
            setError("Invalid Username or Password.")
            setLoading(false)
        }
    }
    return (
        <React.Fragment>
            <Form style={{height: '330px'}} onSubmit={FormHandle} >
                <TextInput type='text' placeholder='Enter email' InputLogo='alternate_email'
                value={email} onChange={(e) =>setEmail(e.target.value)} required />
                <TextInput type='password' placeholder='Enter password' InputLogo='lock'
                value={password} onChange={(e) =>setPassword(e.target.value)} required />
                <Button disabled={loading} BtnName='Login' type='submit' />
                {error? <p className='error' >Invalid Username or Password.</p>:''}
                <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
            </Form>
        </React.Fragment>
    )
}
