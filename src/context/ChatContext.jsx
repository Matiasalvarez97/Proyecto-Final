import { createContext, useContext, useState, useEffect } from "react";
import { users as mockUsers } from "../services/mockApi";
const ChatContext = createContext ()

const ChatProvider = ({children}) => { 
    const[users , setUsers] = useState(() => {
        const savedUsers = localStorage.getItem("db_users");
        return savedUsers ? JSON.parse(savedUsers) : mockUsers;
    });
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user"))|| null)
    
    useEffect(() => {
        localStorage.setItem("db_users", JSON.stringify(users));
    }, [users]);

    const handleUser = (user) => {
        setLoggedUser(user)
        localStorage.setItem("user", JSON.stringify(user))
    }
    const handleSelectedUserId = (id) =>{
        setSelectedUserId(id)
    }
    const login = (userData) => {
        const foundUser = users.find(user => user.email === userData.email);
        if (!foundUser) return false;

        if (foundUser.password === userData.password) { 
           handleUser(foundUser);
            return true;
        }
        return false;
    }
    const RegisterUser = (newUser) => {
        const exists = users.find(u => u.email === newUser.email);
        if (exists) return false;
        const userToAdd = {
            ...newUser,
            id: Date.now(),
            messages: []
        };
        setUsers((prevUsers) => [...prevUsers, userToAdd]);
        return true;
    }; 

    const handleMessages = (newMessage) => {
        setUsers((prevValue)=> prevValue.map((user)=>user.id===selectedUserId ? {
        ... user, messages: [...user.messages, newMessage]    
        }: user)) 

    }

    const selectedUser = users.find(user => user.id === selectedUserId)
    const logout = () =>{
        localStorage.removeItem("user")
    }
    return(
        <ChatContext.Provider value={{users, handleSelectedUserId, login,logout,handleUser ,loggedUser, handleMessages,selectedUser,RegisterUser }}>
            {children}

        </ChatContext.Provider>
    )
}

export {ChatContext, ChatProvider}