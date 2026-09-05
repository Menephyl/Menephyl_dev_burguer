import { Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../config/stripeConfig';
import {
    Cart,
    Checkout,
    CompletePayment,
    Home,
    Login,
    Menu,
    Orders,
    Register,
} from '../containers';
import { EditProduct } from '../containers/Admin/EditProduct';
import { NewProduct } from '../containers/Admin/NewProduct';
import { Products } from '../containers/Admin/Products';
import { AdminLayout } from '../layouts/AdminLayout';
import { UserLayout } from '../layouts/UserLayout';


export function Router() {
    return (

        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cardapio" element={<Menu />}></Route>  {/*ok por que estava  com C maiusculo?*/}
                <Route path="/carrinho" element={<Cart />}></Route>   {/*ok*/}
                <Route path="/carrinho/checkout" element={<Checkout />}></Route> {/*ok*/}
                <Route path="/carrinho/complete" element={
                    <Elements stripe={stripePromise}>
                        <CompletePayment />
                    </Elements>
                }>
                </Route> {/*ok*/}
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="pedidos" element={<Orders />}>
                </Route>
                <Route path="editar-produto" element={<EditProduct />}>
                </Route>
                <Route path="novo-produto" element={<NewProduct />}>
                </Route>
                <Route path="produtos" element={<Products />}>
                </Route>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes >

    );
}
