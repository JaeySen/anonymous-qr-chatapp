import { Box } from "@material-ui/core";
import QRCode from "react-qr-code";
import styles from "./QR.style"

const CustomQR = props => {

    return(
        <Box sx={styles.qrBox}>
            <QRCode value={props.cid}/>
        </Box>
        
    )
}

export default CustomQR;