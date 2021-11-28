import React from 'react'
import { Link } from 'react-router-dom'
import cls from '../styles/videos.module.css'
import Video from './Video'

export default function Videos() {
    return (
        <React.Fragment>
            <div className={cls.videos}>
                <Link to='/quiz' ><Video/></Link>
                <Link to='/quiz' ><Video/></Link>
                <Link to='/quiz' ><Video/></Link>
                <Link to='/quiz' ><Video/></Link>
                <Link to='/quiz' ><Video/></Link>
                <Link to='/quiz' ><Video/></Link>
            </div>
        </React.Fragment>
    )
}
