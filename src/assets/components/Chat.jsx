import { useState } from "react"
import { messages as mockMessages } from "../../services/mockApi"
const Chat = () => {
    const [text , setText] = useState("")
    const[messages, setMessages] = useState(mockMessages)
    
    const handleChangeText = (event) => {
        setText(event.target.value)
    }
    const handleKeyDown = (event) =>{
        if(event.key === "Enter"){
            sendMessage()
        }
    }
    const sendMessage =() => {
        if(text.length === 0){
            return
        }
        const currentTime = new Date()
        const newMessage = {
            id: messages.length + 1,
            author:"juan",
            time: currentTime.getHours() + ":" + currentTime.getMinutes(),
            text: text
        }

        setMessages([...messages, newMessage])
        setText("")
    }
    return (
    <section className="chat">
        <header>
            <h2>Emily Johnson</h2>
            <p>ultima conexion: hace 1 minuto</p>         
        </header>
        <div className="chat-body">
            {
                messages.map((message) => <div key={message.id} className={`message ${message.author === "juan" ? "me" : "received"}`}> 
                   <p><b>{message.author}</b>: {message.text}</p>
                   <p className="timestamp">{message.time}</p>
                </div>)
            }
        </div>
        <div className="chat-imput">
            <input type="text" placeholder="escribe un mensaje..."
            onChange={handleChangeText}
            onKeyDown={handleKeyDown}
            value={text}
            />
            <button onClick={sendMessage}>Enviar</button>
        </div>
    </section>
    )
}

export { Chat }