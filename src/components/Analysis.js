import React from 'react'
import cls from '../styles/analysis.module.css'
import Question from './Question'

export default function Analysis() {
    return (
        <React.Fragment>
            <div className={cls.analysis} >
                <h1>Question Analysis</h1>
                <h4>You answerd 5 out of 10 questions correctly</h4>
                <Question/>
            </div>
        </React.Fragment>
    )
}
