import React, { useState } from 'react'
import Form from './Form'
import TextInput from './TextInput'
import CheckBox from './CheckBox'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

export default function SignupForm() {
    const [userName, setuserName]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [confirmPassword, setconfirmPassword]=useState("")
    const [agree, setagree]=useState("")
    const [error, setError]=useState()
    const [loading, setloading]=useState()

    const {Signup}=useAuth();
    const navigate = useNavigate()

    async function FormHandler(e){
        e.preventDefault();
        // password validation
        if(password !== confirmPassword){
            return setError('Password not match.')
        }
        try{
            setError('')
            setloading(true)
            await Signup(email, password, userName)
            navigate('/')
        }catch(err){
            console.log(err)
            setloading(false)
            setError('failed to create an user!')
        }

    }
    
    return (
        <React.Fragment>
            <Form style={{height:'500px'}} onSubmit={FormHandler} >
                    <TextInput type='text' InputLogo='person' placeholder='Enter name' required
                    value={userName} onChange={(e) => setuserName(e.target.value)} />

                    <TextInput type='email' InputLogo='alternate_email' placeholder='Enter email' required
                    value={email} onChange={(e) => setemail(e.target.value)} />

                    <TextInput type='password' InputLogo='lock' placeholder='Enter password' required
                    value={password} onChange={(e) => setpassword(e.target.value)} />

                    <TextInput type='password' InputLogo='lock_clock' placeholder='Confirm password' required
                    value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />

                    <CheckBox CheckBoxDetails='I agree to the Terms &amp; Conditions' required
                    value={agree} onChange={(e) => setagree(e.target.value)} />

                    <Button type='submit' disabled={loading} BtnName='Submit now' />
                    {error && <p className='error' >{error}</p>}
                    
            <div className="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
                </Form>
        </React.Fragment>
    )
}
