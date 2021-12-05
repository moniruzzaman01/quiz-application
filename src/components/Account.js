import cls from '../styles/account.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

export default function Account() {
  const {currentUser}=useAuth()
    return (
        <React.Fragment>
            <div className={cls.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <p>User: {currentUser.displayName}</p>
        {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
        </React.Fragment>
    )
}
