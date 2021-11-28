import cls from '../styles/account.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Account() {
  const [isLogged, setLogged]=useState(true)
    return (
        <React.Fragment>
            <div class={cls.account}>
        <span class="material-icons-outlined" title="Account">
          account_circle
        </span>
        {
          isLogged?<Link onClick={()=>setLogged(!isLogged)} to="/signup">Signup</Link>
          :
          <Link onClick={()=>setLogged(!isLogged)} to="/login">Login</Link>
        }
        {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
      </div>
        </React.Fragment>
    )
}
