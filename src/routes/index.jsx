import { createBrowserRouter } from "react-router-dom";

// import { Home, Cart, Login, Menu, Register } from '../containers/index'
import { Home, Cart, Login, Menu, Register } from '../containers'

import { Header } from "../components/Header";


export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <Header />,
                <Home />,

            </>
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Register />,
    },

    {
        path: "/cardapio",
        element: <Menu />,
    },
    {
        path: "/carrinho",
        element: <Cart />,
    },
]) 