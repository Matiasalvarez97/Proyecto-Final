import { useState } from "react"
import { users } from "../../services/mockApi.js"
const Aside = () => {
    const [search , setSearch] = useState ("")
    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    const filteredUsers = users.filter((user) => user.name.toLowerCase(). includes (search.toLocaleLowerCase()))
  return (
        <aside>
            <h1>Chat UTN</h1>
            <input type="search" placeholder="Buscar Contactos" onChange={handleChange}/>
            <ul>
                {
                   filteredUsers.map ((user) => (
                    <li>{user.name}
                    <small>{user.status}</small>
                    </li>
                  
                   )
                )
                }
            </ul>
        </aside>
    )
}

export { Aside }