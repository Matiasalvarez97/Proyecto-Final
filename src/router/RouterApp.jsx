import {BrowserRouter,Routes,Route } from "react-router-dom"
import { App } from "../assets/components/app"
import { NotFound } from "../pages/NotFound"

const RouterApp = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export {RouterApp}