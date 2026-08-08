import { Container } from "./styles";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(50)


    const navigate = useNavigate()

    const { cartProducts, clearCart } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, currency) => {
            return currency.price * currency.quantity + acc
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
            const response = await api.post('/create-payment-intent', {
                products,

            })
            console.log(response)
        } catch (err) {
            console.log(err)
            toast.error('Houve um erro ao finalizar o pedido. Tente novamente!', {
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

        /*try {
            const { status } = await api.post('orders', { products },
                {
                    validateStatus: () => true,
                },
            );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                toast.success('Pedido feito! Obrigado!!')
                setTimeout(() => {
                    toast.success('Jajá vem a confirmação do restaurante! ')
                }, 1500)
                clearCart()

            } else if (status === 409) {
                toast.error("Ih, deu ruim!Tente pedir novamente!")
            } else {
                throw new Error();
            }

        } catch (error) {
            toast.error('😭😥 Falha no sistema! Tente novamete mais tarde ou liga pra nois! (35) 9 9213-4176!')
        }
        */
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