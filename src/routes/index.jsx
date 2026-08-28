import { Route, Routes } from 'react-router-dom';

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
                <Route path="/checkout" element={<Checkout />}></Route> {/*ok*/}
                <Route path="/complete" element={<CompletePayment />}></Route> {/*ok*/}
            </Route>


            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />}></Route>
                <Route path="/admin/editar-produto" element={<EditProduct />}></Route>
                <Route path="/admin/novo-produto" element={<NewProduct />}></Route>
                <Route path="/admin/produtos" element={<Products />}></Route>
            </Route>


            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes >

    );
}
