import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { CheckoutForm } from '../../components';
import stripePromise from '../../config/stripeConfig.js';

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

    // http://localhost:5173/complete?payment_intent_client_secret=pi_3UAlw5ItBCwINlFH4tyxDDXN_secret_LpAd63ptwGiiJbmkbC4D9N6Mc
    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    )
}