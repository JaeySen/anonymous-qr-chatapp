import { auth } from "../firebase";

function SignInAnoy(){
    auth.signInAnonymously()
  .then(() => {
    console.log("Success");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}

export default SignInAnoy
