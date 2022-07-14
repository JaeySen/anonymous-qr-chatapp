import { auth } from "../firebase";
import Chat from "./Chat"

function SignInAnoy(props){
    auth.signInAnonymously()
  .then(() => {
    console.log("Success");
    console.log("Sign in as anoy:", auth.currentUser.uid)
    if(props.chatID !== null){
      console.log("sign in chatID:",props.chatID)
      //Chat({chatID = props.chatID})
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

export default SignInAnoy
