import React from "react";

const CartItems = ({ cart }) => {
    return (
        <div>
            <h2>Your Cart</h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {cart.map((product, index) => (
                    <li key={index} style={{ display: 'block', marginBottom: '10px' }}>
                        {product.name} - {product.price}$
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartItems;
