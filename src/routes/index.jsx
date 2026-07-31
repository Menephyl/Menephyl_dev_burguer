import { createBrowserRouter } from "react-router-dom";

// import { Home, Cart, Login, Menu, Register } from '../containers/index'
import { Home, Cart, Login, Menu, Register, Checkout, CompletePayment } from '../containers/index'

import { Header } from "../components/";


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
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/complete",
        element: <CompletePayment />,
    },
]) 