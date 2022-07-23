import React from 'react'
import { Grid } from '@material-ui/core'
import SignInAnoy from './SignInAnonymously'
import useStore from '../store'

import Button from "./Button/Button"
import ButtonStyles from "./Button/button.style"


import { useParams } from 'react-router-dom'
function Join() {
    const cid = useParams()
    const { chatID, setChatID, setStatus} = useStore()

    function joinChat(event) {
        event.preventDefault()
        console.log("cid input", cid)
        SignInAnoy(setChatID)
        setChatID(cid)
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
            <Button style={ButtonStyles.buttonCreate} onClick={joinChat} value="Join chat box"/>
        </Grid>
    )
}

export default Join