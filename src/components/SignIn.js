import React, {useState} from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button, Input } from '@material-ui/core'

import SignInAnoy from './SignInAnonymously'
import Chat from './Chat'
import ReactDOM from 'react-dom';

function SignIn() {
    const [cid, setChatID] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleChange(event) {
        console.log("before:", cid)
        setChatID({value: event.target.value});
        console.log("after:", cid)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={SignInAnoy}>Sign In With Google</Button>

            {/* TODO onSubmit open chatbox with chatid from input */}
            <form onSubmit={handleSubmit}>
                <div>
                <Input style={{ width: '60%', fontSize: '15px', fontWeight: '550', marginLeft: '5px' }} placeholder='chatbox id here...' type="text" value={cid} onChange={handleChange}/>
                <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Go</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn

