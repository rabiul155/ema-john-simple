

import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;

        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const totalAmount = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summery </h3>
            <p>Total iteam : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Shipping Cost : ${shipping}</p>
            <p>Tax : {tax}</p>

            <p>Total Ammount : ${totalAmount}</p>
        </div>
    );
};

export default Cart;