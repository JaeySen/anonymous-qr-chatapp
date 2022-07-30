import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'

import useStore from '../store'

import Button from "./Button/Button"
import Input from "./Input/Input"
import ButtonStyles from "./Button/button.style"
import InputStyles from "./Input/input.style"
import { v4 as uuidv4 } from 'uuid'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
    const { chatID } = useStore()

    async function sendMessage(e) {
        e.preventDefault()
        const { uid } = auth.currentUser

        await db.collection(chatID ? chatID : auth.currentUser.uid).add({
            text: msg,
            messageid: uuidv4(),
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={InputStyles.inputSend} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button type="submit" value="Send" style={ButtonStyles.buttonSend}/>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
