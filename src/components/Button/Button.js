import { Button } from "@material-ui/core";

const customButton = ({
    style,
    onClick, 
    value,
    type
}) => {
    return(
        <Button style={style} onClick={onClick} type={type}>{value}</Button>
    )
}

export default customButton;