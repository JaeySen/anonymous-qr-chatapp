import React from 'react'
import { Grid } from '@material-ui/core'
import useStore from '../store'
import { useParams } from 'react-router-dom'
import Button from "./Button/Button"
import ButtonStyles from "./Button/button.style"

function Join() {
    const cid = useParams()
    const { setChatID, setStatus } = useStore()

    function joinChat(event) {
        event.preventDefault()
        setChatID(cid.cid)
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