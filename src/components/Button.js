import React from 'react'
import cls from '../styles/button.module.css'

export default function Button({className ,BtnName, BtnIcon}) {
    return (
        <React.Fragment>
            <div className={`${cls.button} ${className}`}>
              <span>{BtnName}</span>
              <span className='material-icons-outlined' >{BtnIcon}</span>
            </div>
        </React.Fragment>
    )
}
