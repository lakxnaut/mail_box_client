import classes from './SingleMailInbox.module.css'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import React from 'react'

const SingleMailInbox = (props) => {
    const navigate = useNavigate()

    const { state } = useLocation();


    return (
        <div className={classes.SingleMailInbox}>
            <div> </div>
            <div>Subject : {state.subject}</div>
            <div>From: {state.email}</div>

            <div>message: {state.message}</div>

            <div className={classes.sendContainer}><button onClick={() => navigate(-1)}>Back to Inbox</button></div>
        </div>
    )
}

export default SingleMailInbox