import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./assets/styles/main.css"
import { ChatProvider } from './context/ChatContext'

import { RouterApp } from './router/RouterApp'



  createRoot(document.getElementById('root')).render(

  <StrictMode>
      <ChatProvider>
        <RouterApp/>
      </ChatProvider>
  </StrictMode>,
)
