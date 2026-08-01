import { useLocation } from 'react-router-dom'
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles.css'

export function CheckoutForm() {
    const stripe = useStripe()
    const elements = useElements()
    const {
        state: { dpmCheckerLink }
    } = useLocation()

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

        const { error, payMentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',

        })
    }






    return (
        <div>
            <h1>
                Form
            </h1>
        </div>
    )
}