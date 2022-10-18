import classes from './MailHome.module.css'


import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const SideBar = () => {
    const unreadNumber = useSelector(state => state.mailData.Totalunreadmsg)


    return (
        <div className={classes.SideBar}>
            <div className={classes.composeButton}
            >
                <div><button style={{ backgroundColor: 'blue' }}>Inbox {unreadNumber}</button><p></p>
                </div>
                <NavLink to='/compose'>
                    <button>Compose</button></NavLink>

                <NavLink to='/sentmail'>
                    <button>Sent mails</button></NavLink>
            </div>

        </div>
    )
}

export default SideBar