import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

import SignInAnoy from './components/SignInAnonymously'
import useStore from './store';
import { useEffect } from 'react'
import Join from './components/Join'

import { 
  useParams,
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'

function App() {
  const { chatID, setChatID } = useStore()
  const status = useStore(state => state.status)
  const cid = useParams()

  useEffect(()=> {
    try{
      SignInAnoy({ setChatID })
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    }
    
  }, [])

  // useEffect(() =>{
  //   console.log("store chatID:", chatID)
  // }, [chatID])

  // useEffect(()=>{
  //   console.log("param:", cid)
  // }, [cid])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" element={ status ? (<Chat />) : (<SignIn cid={chatID}/>)}/>
          <Route exact path="/:cid" element={ status ? (<Chat />) : (<Join />)}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
