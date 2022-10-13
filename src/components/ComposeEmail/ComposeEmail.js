import React, { useRef, useState } from 'react'
import classes from './ComposeEmail.module.css'

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import JoditEditor from 'jodit-react';


const ComposeEmail = () => {
    const textRef = useRef();
    const emailRef = useRef()
    const subjectRef = useRef()
    const [content, setContent] = useState();

    const config = {
        placeholder: "Enter Email"
    }

    async function sendEmailHandler() {


        const url = 'https://mail-box-client-58a60-default-rtdb.firebaseio.com/emailData.json';

        const resp = await fetch(url, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sendingemail: emailRef.current.value,
                subject: subjectRef.current.value,
                message: textRef.current.value

            })
        })

        const data = await resp.json()
        console.log(data);

    }

    return (
        <div className={classes.ComposeEmail}>
            <div className={classes.headerContainer}>
                <div className={classes.receiverMail}>
                    <input type='email' ref={emailRef} placeholder='adbc@gmail.com' />
                </div>
                <div className={classes.subject}>
                    <input ref={subjectRef} type='text' placeholder='Test mail' />

                </div>
            </div>
            <div className={classes.editorBox}>
                <JoditEditor
                    ref={textRef}
                    value={content}
                    config={config}

                    tabIndex={1} // tabIndex of textarea
                    onChange={newContent => setContent(newContent)}
                />
            </div>

            <div className={classes.sendContainer}><button onClick={sendEmailHandler}>Send Mail</button></div>

        </div>
    )
}

export default ComposeEmail