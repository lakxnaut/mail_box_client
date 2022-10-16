import classes from './MailHome.module.css'

import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import AllEmails from './AllEmails'

const MailHome = () => {
    return (
        <div>
            <Header />
            <div className={classes.MailBodyContainer}>
                <SideBar />
                <AllEmails />
            </div>
        </div>
    )
}

export default MailHome