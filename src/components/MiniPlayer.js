import React from 'react'
import cls from '../styles/miniPlayer.module.css'
import img from '../assets/images/3.jpg'

export default function MiniPlayer({videoTitle}) {
    return (
        <React.Fragment>
            <div className={`${cls.miniPlayer} ${cls.floatingBtn}`}>
            <span className={`material-icons-outlined ${cls.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined ${cls.close}`}> close </span>
            <img src={img} alt="" />
            <p>{videoTitle}</p>
            </div>
        </React.Fragment>
    )
}
