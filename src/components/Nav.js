import React from 'react'
import cls from '../styles/nav.module.css'
import logo from '../assets/images/logo-bg.png'
import Account from './Account'
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <React.Fragment>
            <nav className={cls.nav}>
      <ul>
        <li>
          <Link to="/" className={cls.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
        <Account/>
    </nav>
        </React.Fragment>
    )
}
