import React from 'react'
import { auth } from '../firebase.js'
import Button from "./Button/Button"
import ButtonStyles from "./Button/button.style"
import useStore from './../store'

function SignOut() {
    const setStatus = useStore(state => state.setStatus)

    function signOut(){
        setStatus(false)
        console.log("Sign out!")
        auth.signOut()
    }
    return (
        <div className="chatNav">
            <Button style={ButtonStyles.signOut} onClick={signOut} value="Leave Chat box"/>
        </div>
    )
}

export default SignOut
