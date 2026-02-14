import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Chat } from './assets/components/Chat'
import { Aside } from './assets/components/Aside'
import "./assets/styles/main.css"
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <main className='app'>
      <Aside />
      <Chat />
    </main>
  </StrictMode>,
)
