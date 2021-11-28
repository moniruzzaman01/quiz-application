import React from 'react'
import cls from '../styles/video.module.css'
import img from '../assets/images/3.jpg'

export default function Video() {
    return (
        <React.Fragment>
            <a href="quiz.html"
            ><div className={cls.video}>
              <img src={img} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className={cls.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
        </React.Fragment>
    )
}
