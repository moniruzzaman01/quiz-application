import React from 'react'
import cls from '../styles/answers.module.css'
import CheckBox from './CheckBox'

export default function Answer() {
    return (
        <React.Fragment>
            <div className={cls.answers} >
                <CheckBox className={cls.answer} CheckBoxDetails='answer-1' />
            </div>
        </React.Fragment>
    )
}
