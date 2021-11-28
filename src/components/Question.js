import React from 'react'
import cls from '../styles/question.module.css'
import Answers from './Answers'

export default function Question() {
    return (
        <React.Fragment>
            <div className={cls.question} >
                <div className={cls.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
                </div>
                <Answers/>
            </div>
        </React.Fragment>
    )
}
