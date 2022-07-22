import { Input } from "@material-ui/core";

const customInput = ({
    style,
    placeholder,
    type,
    value,
    onChange
}) => {
    
    return(
        <Input style={style} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
    )

}

export default customInput;