import React from 'react'
import cls from '../styles/button.module.css'

export default function Button({className ,BtnName, BtnIcon}) {
    return (
        <React.Fragment>
            <button className={`${cls.button} ${className}`}>
              <span>{BtnName}</span>
              <span className='material-icons-outlined' >{BtnIcon}</span>
            </button>
        </React.Fragment>
    )
}
