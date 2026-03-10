import {BrowserRouter,Routes,Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"
import { RouteProtected } from "../assets/components/RouteProtected"
import { Register } from "../pages/register"
import { Acerca } from "../pages/acerca"
const RouterApp = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<RouteProtected><Home/></RouteProtected>} />
            <Route path="/Login" element={<Login />}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/acerca" element={<Acerca />} />
        </Routes>
        </BrowserRouter>
    )
}

export {RouterApp}