import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
       height ="100vh"
       projectID ="0418e838-f2d4-4548-bbb4-19e007b3bf90"
       userName ={localStorage.getItem('username')}
       userSecret ={localStorage.getItem('password')} 
       renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;