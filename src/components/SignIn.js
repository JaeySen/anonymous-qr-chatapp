import React, {useState, useRef} from 'react'
import { Button, Input, Grid } from '@material-ui/core'
import SignInAnoy from './SignInAnonymously'
import useStore from '../store'
import CustomQR from './QR/QR.js'
function SignIn() {
    const [cid, setchatID] = useState('');
    const inputRef = useRef("")

    const { chatID, setChatID } = useStore()

    function handleSubmit(event) {
        event.preventDefault();
        inputRef.current = cid
        setChatID(cid)
        SignInAnoy()
    }   

    function handleChange(event) {
        setchatID({value: event.target.value});
        setChatID({value: event.target.value});
        console.log(cid);
        console.log(chatID);
    }

    // useEffect(() => {
    //     console.log("reder", cid.toString());
    // }, [cid])
    
    
    return (
        // <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        //     <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={SignInAnoy}>Create chat box</Button>
        //     <Input style={{ width: '60%', fontSize: '15px', fontWeight: '550', marginLeft: '5px' }} placeholder='chatbox id here...' type="text" ref={inputRef} value={cid} onChange={handleChange}/>
        //     <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} onClick={handleSubmit}>Go</Button>
        //     <CustomQR cid={cid} />
        // </div>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Button onClick={SignInAnoy}>Create chat box</Button>
            <Input placeholder='chatbox id here...' type="text" ref={inputRef} value={cid} onChange={handleChange}/>
            <Button onClick={handleSubmit}>Go</Button>
            <CustomQR cid={cid.toString()} />
        </Grid>
    )
}

export default SignIn

