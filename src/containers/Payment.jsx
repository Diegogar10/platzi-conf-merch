import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import '../styles/components/Payment.css';
import { AppContext } from "../context/AppContext";

const Payment = () => {

    const { state, addNewOrder } = React.useContext(AppContext);
    const { cart, buyer } = state;
    let navigate = useNavigate();

    const paypalOptions = {
        clientId:'',
        ident:'capture',
        currency:'USD'
    }

    const buttonStyles = {
        layaout: 'vertical',
        shape: 'react'
    }

    const handlePaymentSuccess = (data) => {
        
        console.log(data);
        
        if(data.status === 'COMPLETE'){
            const newOrder = {
                buyer,
                pruduct: cart,
                payment: data
            }
            addNewOrder(newOrder);
            navigate('/checkout/success')
        }
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return(
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item)=>(
                    <div className="Payment-item" key={item.title}>
                        <div className="payment-elemnt">
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {' '}
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions = {paypalOptions}
                        buttonStyles = {buttonStyles}
                        amount = {handleSumTotal()}
                        onPaymentStart = {()=>console.log('Start Payment')}
                        onPaymentSuccess = {data => handlePaymentSuccess(data)}
                        onPayentError = {error => console.log(error)}
                        onPaymentCancel = {data => console.log(data)}
                    />
                </div>
                <Link to='/checkout/success'>
                    <button>Success</button>
                </Link>
            </div>
        </div>
    )
}

export {Payment};