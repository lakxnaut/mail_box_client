import classes from './MailHome.module.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { mailDataAction } from '../store/maildataSlice';
import { useNavigate } from 'react-router-dom'



import React, { useEffect, useState } from 'react'

const AllEmails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Data = useSelector(state => state.mailData.inboxData)
    const sortByLatest = [...Data].reverse()
    // const readMail = useSelector(state => state.mailData.inboxData);
    // const sortByLatesreadMail = readMail.reverse()
    // const Datas = useSelector(state => state.mailData)
    const endpoint = localStorage.getItem('senderEmail');
    const [clickedItems, setClickedItems] = useState([]);



    // let readClass = `${classes.newMessage}`;




    // console.log('hello');

    // useEffect(() => {
    //     const getInboxData = async function getData() {
    //         const url = `https://mail-box-client-58a60-default-rtdb.firebaseio.com/emailData/${endpoint}/received.json`

    //         const inboxData = []
    //         const resp = axios(url)
    //         const data = await resp.data;


    //         for (let item in data) {

    //             inboxData.push({
    //                 senderEmail: data[item].senderemail,
    //                 senderDescription: data[item].message,
    //                 senderSubject: data[item].subject,
    //                 senderId: item,
    //                 isRead: data[item].isRead

    //             })

    //             // console.log(inboxData[0].isRead);


    //         }

    //         dispatch(mailDataAction.getInboxData(inboxData))


    //     }

    //     getInboxData()
    //     console.log('hello');
    // }, [dispatch])





    useEffect(() => {
        const getInboxData = setInterval(() => {
            // let data;

            const url = `https://mail-box-client-58a60-default-rtdb.firebaseio.com/emailData/${endpoint}/received.json`

            const inboxData = []
            const resp = axios(url).then(resp => resp.data).then(data => {
                for (let item in data) {

                    inboxData.push({
                        emailFrom: data[item].emailFrom,
                        message: data[item].message,
                        subject: data[item].subject,
                        senderId: item,
                        isRead: data[item].isRead

                    })

                    // console.log(inboxData[0].isRead);


                }

                dispatch(mailDataAction.getInboxData(inboxData))
                dispatch(mailDataAction.getTotalUnreadMsg(inboxData))


            })



            // console.log('hello');




        }, 2000)

        // getInboxData()
        console.log('hello');
        return () => clearInterval(getInboxData);
    }, [dispatch])






    function mailHandler(mail) {
        console.log(mail);
        if (mail.isRead) {
            navigate('/mail/single', { state: mail })
            return;

        }



        // console.log(mail.isRead);

        // dispatch(mailDataAction.isReadMail(mail.senderId))
        // console.log(mail.isRead);

        // const isReadMail = readMail.map(item => {
        //     return (
        //         item.senderId === mail.senderId

        //     )
        // })

        // if (isReadMail.isRead) {

        //     readClass = `${classes.readMessage}`


        // }
        // else {
        //     readClass = `${classes.newMessage}`


        // }



        axios.put(`https://mail-box-client-58a60-default-rtdb.firebaseio.com/emailData/${endpoint}/received/${mail.senderId}.json`, {
            emailFrom: mail.emailFrom,
            message: mail.message,
            subject: mail.subject,

            isRead: true
        })
            .then(res => console.log(res))


        navigate('/mail/single', { state: mail })




    }

    function deleteHanlder(id) {
        console.log(id);
        dispatch(mailDataAction.deleteEmail(id))

        axios.delete(`https://mail-box-client-58a60-default-rtdb.firebaseio.com/emailData/${endpoint}/received/${id}.json`)
            .then(res => console.log(res))


    }

    // console.log(Totalunreadmsg);


    return (
        <div className={classes.AllEmails}>

            {sortByLatest.map((mail, i) => {

                return (<div key={mail.senderId} onClick={() => { mailHandler(mail) }} className={classes.SingleEmailBox}>
                    <div style={{
                        height: !sortByLatest[i].isRead ? '12px' : '',
                        width: !sortByLatest[i].isRead ? '12px' : '',
                        backgroundColor: !sortByLatest[i].isRead ? `rgba(64, 107, 169, 1)` : 'white'

                    }}></div>
                    <div className={classes.emailSubject}> {mail.subject}</div>
                    <div className={classes.message}>{mail.senderDescription}</div>
                    <div><button onClick={() => { deleteHanlder(mail.senderId) }} className={classes.dltbtn}>Delete</button></div>
                </div>)


            })}




        </div>
    )
}

export default AllEmails