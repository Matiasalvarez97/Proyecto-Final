import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState ("")
    const [password,setPassword] = useState("")
    const[error,setError] = useState(null)

    const {login} = useContext (ChatContext)

    const navigate= useNavigate()
    const handleChangeEmail= (e) => {
       setEmail(e.target.value)
    }
    const handleChangePassword =(e) =>{ 
        setPassword(e.target.value)
    }
    
    const handleSubmit= (e) => {
        e.preventDefault()
        setError(null)
        const response = login ({email,password})

        if (!response){
            setError(true)
            return
        }
        navigate ("/")
    }
    return(
       <section>
        <form onSubmit={handleSubmit}>
            <h2>Bienvenido, inicia sesion</h2>
            <input type="email" placeholder="ingrese email" onChange={handleChangeEmail}/>
            <input type="password" placeholder="ingrese contraseña" onChange={handleChangePassword}/>
            <button>ingresar</button>
            {
                error && <p className="error-form">Error al ingresar</p>
            }
        </form>
       </section>
    )
         
}

export { Login }