import React from 'react'
import classes from './Header.module.css'


const Header = () => {
    const email = localStorage.getItem('originalEmail')

    return (
        <div className={classes.Header}>
            <div><h3>Welcome to Emailer!!! {email}</h3></div>

        </div>
    )
}

export default Header