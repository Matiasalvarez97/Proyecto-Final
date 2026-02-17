import { useEffect, useState } from "react"
import { users } from "../../services/mockApi.js"
const Aside = () => {
    const [search , setSearch] = useState ("")
    const [users, setUsers] = useState([])
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const fectchingData = async () => {
        try{
            const response = await fetch("https://dummyjson.com/users")
            if (!response.ok){
                alert("fallo el pedido")
                return
            }
            const data = await response.json()
             setUsers(data.users)
        } catch(error){
            console.log(error.message)
        }
    }

    useEffect(() => {
        fectchingData()
    },[])

    const filteredUsers = users.filter((user) => user.firstName.toLowerCase(). includes (search.toLocaleLowerCase()))
  return (
        <aside>
            <h1>Chat UTN</h1>
            <input type="search" placeholder="Buscar Contactos" onChange={handleChange}/>
            {
                filteredUsers.length === 0 && <p>No se encontraron contactos</p> 
            }
            <ul>
                {
                   filteredUsers.map ((user) => (
                    <li key={user.id}>
                        <img src={user.image} alt="foto de perfil" />
                        <div>{user.firstName} {user.lastName}</div>
                    <small>{user.address.country}</small>
                    </li>
                  
                   )
                )
                }
            </ul>
        </aside>
    )
}

export { Aside }