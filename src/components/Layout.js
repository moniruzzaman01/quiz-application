import React from 'react'
import cls from '../styles/layout.module.css'
import Nav from "./Nav";

export default function Layout({children}) {
    return (
        <React.Fragment>
            <Nav/>
            <main className={cls.main}>
                <div className={cls.container}>
                    {children}
                </div>
            </main>
        </React.Fragment> 
    )
}
