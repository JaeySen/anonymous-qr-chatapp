import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

import useStore from './../store'

function SignOut() {
    const setStatus = useStore(state => state.setStatus)

    function signOut(){
        setStatus(false)
        auth.signOut()
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={signOut}>Leave chat box</Button>
        </div>
    )
}

export default SignOut
