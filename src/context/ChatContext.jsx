import { createContext, useContext, useState } from "react";
import { users as mockUsers } from "../services/mockApi";
const ChatContext = createContext ()

const ChatProvider = ({children}) => { 
    const[users , setUsers] = useState(mockUsers)
    const [selectedUser, setSelectedUser] = useState(null)
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user"))|| null)

    const handleUser = (user) => {
        setLoggedUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }
    const handleSelectedUser = (id) =>{
        setSelectedUser(users.find(user => user.id === id ))
    }
    const login=(userData)=>{
     const foundUser = mockUsers.find(user => user.email === userData.email )
     if (!foundUser) {
        return false
         }

    if (foundUser.password=== userData.password){
    return true    
    }
    
    }
    return(
        <ChatContext.Provider value={{users, selectedUser, handleSelectedUser, login,handleUser ,loggedUser }}>
            {children}

        </ChatContext.Provider>
    )
}

export {ChatContext, ChatProvider}