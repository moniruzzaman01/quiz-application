import cls from '../styles/account.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

export default function Account() {
  const {currentUser, Logout}=useAuth()
    return (
        <React.Fragment>
            <div className={cls.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        {currentUser ? 
          (<>
            <span>{currentUser.displayName}</span>
            <span className="material-icons-outlined" title="Logout" onClick={Logout}> logout </span>
          </>)
          :
          (<>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>)}
          
      </div>
        </React.Fragment>
    )
}
