import classes from './MailHome.module.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { mailDataAction } from '../store/maildataSlice';



import React, { useEffect } from 'react'

const AllEmails = () => {
    const dispatch = useDispatch()
    const Data = useSelector(state => state.mailData.inboxData)

    console.log('hello');



    async function getInboxData() {
        const endpoint = localStorage.getItem('senderEmail');
        const url = `https://mail-box-client-58a60-default-rtdb.firebaseio.com/emailData/${endpoint}/received.json`

        const inboxData = []
        const resp = await axios(url)
        const data = await resp.data;


        for (let item in data) {

            inboxData.push({
                senderEmail: data[item].senderemail,
                senderDescription: data[item].message,
                senderSubject: data[item].subject,
                senderId: item

            })




        }

        dispatch(mailDataAction.getInboxData(inboxData))


    }


    useEffect(() => {
        getInboxData()
        console.log('hello');
    }, [])


    return (
        <div className={classes.AllEmails}>

            {Data.map(mail => {

                return (<div key={mail.senderId} className={classes.SingleEmailBox}>
                    <div>new</div>
                    <div className={classes.emailSubject}> {mail.senderSubject}</div>
                    <div className={classes.emailDescription}>{mail.senderDescription}</div>
                    <div><button>Delete</button></div>
                </div>)


            })}




        </div>
    )
}

export default AllEmails