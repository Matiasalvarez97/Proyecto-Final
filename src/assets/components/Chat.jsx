const Chat = () => {
    const[messages, setMessages] = useState([])
    return (
    <section>
        <header>
            <h2>Emily Johnson</h2>
            <p>ultima conexion: hace 1 minuto</p>         
        </header>
        <div className="chat-body">
            {
                messages.map(() => <div> 
                    <p>hola</p>
                </div>)
            }
        </div>
    </section>
    )
}

export { Chat }