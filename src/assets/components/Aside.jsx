import { useContext, useEffect, useState } from "react"
/* import { users } from "../../services/mockApi.js" */
import { ChatContext } from "../../context/ChatContext.jsx"
import { useNavigate } from "react-router-dom"
const Aside = () => {
    const [search , setSearch] = useState ("")
   

    const {users, handleSelectedUserId,  loggedUser,logout } = useContext (ChatContext)

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredUsers = users.filter((user) => {
       if (!loggedUser) return true;
       if (user.email.toLowerCase() === loggedUser.email.toLowerCase()) {
        return false;}
       const name = user.Firstname || user.firstName || "";
    const lastName = user.lastName || "";
    const fullName = `${name} ${lastName}`.toLowerCase();
    
    return fullName.includes(search.toLowerCase());
    })


    const handleClick = (id) =>{
        handleSelectedUserId(id)
    }

    const navigate= useNavigate()
    const handleLogout =() => {
        logout()
        navigate("/login")
    }

    return (
        <aside>
            <h1>Chat UTN</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
            <input className="search" type="search" placeholder="Buscar Contactos" onChange={handleChange}/>
            {
                filteredUsers.length === 0 && <p className="not-found-text">No se encontraron contactos</p> 
            }
            <ul>
                {
                   filteredUsers.map ((user) => (
                    <li key={user.id} onClick={()=> handleClick(user.id)}>
                        <img src={user.image || "https://via.placeholder.com/150"} alt="foto de perfil" />
                        <div>{user.Firstname || user.firstName} {user.lastName || ""}
                        <small>{user.address?.country|| "Sin ubicación"}</small>
                        </div>
                    
                    </li>
                  
                   )
                )
                }
            </ul>
        </aside>
    )
}

export { Aside }