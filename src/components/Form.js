import React from 'react'
import cls from '../styles/form.module.css'

export default function Form({children, className, ...rest}) {
    return (
        <React.Fragment>
            <form className={`${className} ${cls.form}`} action="#" {...rest}>
                {children}
            </form>
        </React.Fragment>
    )
}
