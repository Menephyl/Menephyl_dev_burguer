import { useLocation } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from '../../config/stripeConfig'
import { CheckoutForm } from '../../components'
import { useLocation } from 'react-router-dom'

export function Checkout() {
    const {
        state: { clientSecret },
    } = useLocation()

    if (!clientSecret) {
        return (
            <div>
                Erro! Volte e tente novamente!
            </div>
        )
    }

    console.log(location)

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm>
                Checkout
            </CheckoutForm>
        </Elements>
    )
}