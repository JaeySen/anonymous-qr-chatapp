import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import Join from './components/Join'
import SignInAnoy from './components/SignInAnonymously'

import useStore from './store';
import { useEffect } from 'react'

import { 
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'

function App() {
  const { chatID, setChatID } = useStore()
  const status = useStore(state => state.status)

  useEffect(()=> {
    try{
      SignInAnoy({ setChatID })
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    }
    
  }, [setChatID])

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
