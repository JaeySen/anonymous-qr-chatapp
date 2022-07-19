import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import useStore from '../../store';

const CustomQR = props => {
    const chatID = useStore(state => state.chatID)
    
    useEffect(() => {
        console.log(chatID.value.toString());
    }, [props])
    

    return(
        <QRCode value={chatID.value.toString()}/>
    )
}

export default CustomQR;