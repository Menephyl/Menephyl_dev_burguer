import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../../hooks/CartContext";
import { Button } from "../../components";
import { Container } from '../../../styles.js';

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(50)


    const navigate = useNavigate();

    const { cartProducts, clearCart } = useCart() // limparcarrinho ligado onde no cart?

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, currencyValue) => {
            return currencyValue.price * currencyValue.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts])


    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price,
            }
        })
        try {
            const { data } = await api.post('/create-payment-intent', {
                products
            })
            navigate('checkout', {
                state: data,
            })

        } catch (err) {
            console.log(err)
            toast.error('😭😥 Houve um erro ao finalizar o pedido. Tente novamente!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
        }
    }
    return (
        <div>
            <Container>
                <div className="container-top">

                    <h2 className="title">Resumo de Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>

                <div className="container-bottom">

                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>

                </div>
            </Container>

            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>

    )
}