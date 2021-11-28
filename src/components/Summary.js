import React from 'react'
import cls from '../styles/summary.module.css'
import img from '../assets/images/success.png'

export default function Summary() {
    return (
        <React.Fragment>
            <div className={cls.summary}>
          <div className={cls.point}>
            {/* <!-- progress bar will be placed here --> */}
            <p className={cls.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={cls.badge}>
            <img src={img} alt="Success" />
          </div>
        </div>
        </React.Fragment>
    )
}
