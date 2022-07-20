import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

import useStore from '../store'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')
    // const cid = useStore(state => state.chatID)
    // const msgid = useStore(state => state.messageID)
    // const increMessageID = useStore(state => state.increMessageID)
    const { chatID, setChatID, messageID, increMessageID} = useStore()
    async function sendMessage(e) {
        e.preventDefault()
        const { uid } = auth.currentUser

        await db.collection(chatID ? chatID : auth.currentUser.uid).add({
            text: msg,
            messageID,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        increMessageID()
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
