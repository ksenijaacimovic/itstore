import React, { useState } from "react";
import CartItems from "../components/CartItems";

const Cart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            {/* Prikaz komponente za korpu */}
            <CartItems cart={cart} />

            {/* Dugmad za dodavanje proizvoda */}
            <h2>Products</h2>
            <button onClick={() => addToCart({ name: "Product 1", price: 10 })}>
                Add to Cart
            </button>
            {/* Dodajte slične dugmadi za dodavanje drugih proizvoda */}
        </div>
    );
};

export default Cart;
