import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './assets/components/app'
import "./assets/styles/main.css"
import { ChatProvider } from './context/ChatContext'



  createRoot(document.getElementById('root')).render(

  <StrictMode>
      <ChatProvider>
        <App/>
      </ChatProvider>
  </StrictMode>,
)
