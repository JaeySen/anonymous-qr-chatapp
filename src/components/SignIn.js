import React from 'react'
import { Grid } from '@material-ui/core'
import CustomQR from './QR/QR.js'
import Button from "./Button/Button"
import ButtonStyles from "./Button/button.style"

import useStore from '../store'

function SignIn(props) {
    const { setStatus } = useStore()

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
            <CustomQR cid={"https://anonymous-qr-chatapp.herokuapp.com/" + props.cid.toString()}/>
        </Grid>
    )
}

export default SignIn

