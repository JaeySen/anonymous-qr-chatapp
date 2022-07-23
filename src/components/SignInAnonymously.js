import { auth } from "../firebase";

function SignInAnoy({ setChatID }){
    auth.signInAnonymously()
  .then(() => {
    console.log("Sign in as anoy:", auth.currentUser.uid)
    setChatID(auth.currentUser.uid)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

}

export default SignInAnoy
