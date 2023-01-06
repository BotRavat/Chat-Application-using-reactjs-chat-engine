import React from 'react'
import DirectChat from './DirectChat';
import './App.css';
import {ChatEngine} from 'react-chat-engine';

//Using arrow function component
const App = () => {
  return (<div>
    <ChatEngine
      userName='aka'
      projectID = '22f355f6-9220-4605-8ab7-2a677d414220'
      userSecret='secret1'

    />
   {/* <DirectChat/> */}
    </div>
  )
}

export default App


