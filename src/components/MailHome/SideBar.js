import classes from './MailHome.module.css'


import React from 'react'
import { NavLink } from 'react-router-dom'


const SideBar = () => {
    return (
        <div className={classes.SideBar}>
            <div className={classes.composeButton}
            >
                <NavLink to='/compose'>
                    <button>Compose</button></NavLink>

                <NavLink to='/sentmail'>
                    <button>Sent mails</button></NavLink>
            </div>

        </div>
    )
}

export default SideBar