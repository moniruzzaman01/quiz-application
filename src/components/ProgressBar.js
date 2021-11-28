import React from 'react'
import { Link } from 'react-router-dom'
import cls from '../styles/progressBar.module.css'
import Button from './Button'

export default function ProgressBar() {
    return (
        <React.Fragment>
            <div className={cls.progressBar}>
            <div className={cls.backButton}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={cls.rangeArea}>
            <div className={cls.tooltip}>24% Cimplete!</div>
            <div className={cls.rangeBody}>
              <div className={cls.progress} style={{width: '20%'}}></div>
            </div>
          </div>
          <Link to="/result">
            <Button className={cls.next} BtnIcon='arrow_forward' BtnName='next question' />
          </Link>
            </div>
        </React.Fragment>
    )
}
