import classes from '../MailHome.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


import React, { useEffect } from 'react'
import { mailDataAction } from '../../store/maildataSlice'

const SentMail = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sentData = useSelector(state => state.mailData.outBox)
    const sortByLatest = [...sentData].reverse()

    console.log('hello');



    async function getSentData() {
        const endpoint = localStorage.getItem('senderEmail');
        const url = `https://mail-box-client-58a60-default-rtdb.firebaseio.com/emailData/${endpoint}/sent.json`

        const outboxData = []
        const resp = await axios(url)
        const data = await resp.data;


        for (let item in data) {

            outboxData.push({
                senderEmail: data[item].sendingemail,
                senderDescription: data[item].message,
                senderSubject: data[item].subject,
                senderId: item


            })



        }

        dispatch(mailDataAction.getoutBoxData(outboxData))


    }


    useEffect(() => {
        getSentData()
        console.log('hello');
    }, [])

    console.log(sortByLatest);

    return (
        <div className={classes.AllEmails}>
            <div className={classes.sentMailTitle}><p>Sent Mails</p></div>

            {sortByLatest.map(item => {
                return (
                    <div key={item.senderId} className={classes.SingleEmailBox}>

                        <div className={classes.emailSubject}> {item.senderSubject}</div>
                        <div className={classes.emailDescription}>{item.senderDescription}</div>
                        <div><button style={{ backgroundColor: 'red' }}>Delete</button></div>


                    </div>
                )
            })}

            <div className={classes.sendContainer}><button onClick={() => navigate(-1)}>Back to Inbox</button></div>


        </div>
    )
}

export default SentMail