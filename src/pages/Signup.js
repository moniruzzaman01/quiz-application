import React from 'react'
import Illustration from '../components/Illustration'
import SignupForm from '../components/SignupForm'

export default function Signup() {
    return (
        <React.Fragment>
            <h1>Create an account</h1>
            <div className='column' >
                <Illustration/>
                <SignupForm/>
            </div>
        </React.Fragment>
    )
}
