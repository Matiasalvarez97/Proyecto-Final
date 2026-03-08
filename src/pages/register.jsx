import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState ("")
    const [password,setPassword] = useState("")
    const[error,setError] = useState(null)
    const [Firstname, setName] = useState("")

    const {RegisterUser,handleUser} = useContext (ChatContext)

    const navigate= useNavigate()
    const handleChangeEmail= (e) => {
       setEmail(e.target.value)
    }
    const handleChangePassword =(e) =>{ 
        setPassword(e.target.value)
    }
    const handleChangeFirstname = (e) => {
        setName(e.target.value)
    }
    
    const handleSubmit= (e) => {
        e.preventDefault()
        setError(null)
        const response = RegisterUser ({Firstname,email,password})

        if (!response){
            setError(true)
            return
        }
        handleUser({Firstname,email,password})
        navigate ("/")
    }
    return(
        <section>
            <form onSubmit={handleSubmit}>
                <h2 className="title-login">Bienvenido, Registra tu usuario</h2>

                <input 
                    type="text" placeholder="ingrese su nombre"  onChange={handleChangeFirstname} value={Firstname} required 
                />
                {Firstname.length > 0 && Firstname.length < 3 && (
                    <p className="error-form">El nombre debe tener al menos 3 caracteres</p>
                )}
             
                <input 
                    type="email" placeholder="ingrese email" onChange={handleChangeEmail}  value={email} required 
                />

                <input 
                    type="password" placeholder="ingrese contraseña" onChange={handleChangePassword} value={password} required
                />
                {password.length > 0 && password.length < 6 && (
                    <p className="error-form">La contraseña debe tener al menos 6 caracteres</p>
                )}

                <button type="submit">Registrar usuario</button>
                <button type="button" onClick={() => navigate("/login")}>Volver</button>
                
                {error && <p className="error-form">Error al registrar usuario</p>}
            </form>
        </section>
    )
         
}

export { Register }