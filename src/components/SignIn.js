import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import SignInAnoy from './SignInAnonymously'
import useStore from '../store'

import CustomQR from './QR/QR.js'
import Button from "./Button/Button"
import Input from "./Input/Input"
import ButtonStyles from "./Button/button.style"
import InputStyles from "./Input/input.style"


function SignIn(props) {
    // const [cid, setchatID] = useState('');
    // const { chatID, setChatID } = useStore()
    const { status, setStatus } = useStore()

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setChatID(cid)
    //     SignInAnoy()
    // }

    // function handleChange(event) {
    //     console.log("cid input", event.target.value)
    //     setchatID(event.target.value)     
    // }

    function handleCreate(event){
        setStatus(true)
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Button style={ButtonStyles.buttonCreate} onClick={handleCreate} value="Create chat box"/>
            {/* <Input style={InputStyles.input} placeholder='Chatbox id here...' type="text" value={cid.value} onChange={handleChange}/> */}
            <CustomQR cid={"https://anonymous-qr-chatapp.herokuapp.com/" + props.cid.toString()}/>
            {/* <Button style={ButtonStyles.buttonGo} onClick={handleSubmit} value="Go"/> */}
        </Grid>
    )
}

export default SignIn

