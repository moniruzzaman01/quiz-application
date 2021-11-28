import React from 'react'
import cls from '../styles/textInput.module.css'

export default function TextInput({InputLogo, ...rest}) {
    return (
        <React.Fragment>
            <div className={cls.textInput}>
              <input {...rest} />
              <span className="material-icons-outlined"> {InputLogo} </span>
            </div>
        </React.Fragment>
    )
}
