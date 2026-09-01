import {
    PaymentElement,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js';

import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext.jsx';
import { api } from '../../../services/api.js';
import '../styles.css';


export function CheckoutForm() {

    const { cartProducts, clearCart } = useCart()
    const stripe = useStripe()
    const elements = useElements()

    const {
        state: { dpmCheckerLink }
    } = useLocation()

    const navigate = useNavigate();

    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            //Stripe.js hasn't loaded yet. Make sure the 'js.stripe.com' script is loaded.

            console.error('Stripe.js hasn\'t loaded yet. Make sure the \'js.stripe.com\' script is loaded.')
            return
        }

        setIsLoading(true)
        // chama a função confirmPayment do stripe 
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',

        })

        if (error) {
            setMessage(error.message)
            toast.error(error.message);

        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            // caso pagamento deu certo, envia o pedido para o backend.

            try {
                const products = cartProducts.map((product) => {
                    return {
                        id: product.id,
                        quantity: product.quantity,
                        price: product.price,
                    }
                })
                const { status } = await api.post('/orders',
                    { products },
                    {
                        validateStatus: () => true,

                    },
                )
                if (status === 201 || status === 200) {
                    setTimeout(() => {
                        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,

                        )
                    }, 3000)
                    clearCart()
                    toast.success('Pedido Realizado com Sucesso!')

                } else if (status === 409) {
                    toast.error('Erro ao realizar o pedido!');

                } else {
                    throw new Error();
                }
            } catch (error) {
                toast.error('Falha no Sistema!, Tente Novamente.  ')
                console.error(error)
            }

        } else {
            navigate(
                `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
            )
        }
        // http://localhost:5173/complete?payment_intent_client_secret=pi_3UAlw5ItBCwINlFH4tyxDDXN_secret_LpAd63ptwGiiJbmkbC4D9N6Mc
        setIsLoading(false)
    }

    const paymentElementOptions = {
        layout: 'accordion',

    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" options={paymentElementOptions} />

                <button
                    className='button'
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                >
                    <span id="button-text">
                        {
                            isLoading ? (
                                <div className="spinner" id="spinner"></div>
                            ) : (
                                'Pagar Agora'
                            )}
                    </span>
                </button>

                {/* Show error message to your customer */}
                {message && <div id="payment-message">{message}</div>}
            </form>

            <div>
                <p>Os metodos são disponibilidados de acordo com sua região.</p>
                <a href={dpmCheckerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="dpm-integration-checker"
                >
                    Ver métodos de pagamento.
                </a>
            </div>
        </div>
    )
}