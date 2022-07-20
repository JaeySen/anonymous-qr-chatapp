import { useEffect } from "react";
import QRCode from "react-qr-code";

const CustomQR = props => {

    // useEffect(() => {
    //     console.log("qr props.cid:", props.cid)

    // }, [props.cid])

    return(
        <QRCode value={props.cid}/>
    )

}

export default CustomQR;