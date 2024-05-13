import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import choco from '../../assets/ChocolateCake.png';
import muff from '../../assets/blueberrymuffins.png';
import red from '../../assets/RedVelvetCake.png';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: choco,
            name: 'Chocolate Cake',
            description: 'Delicious chocolate cake with rich flavor.',
            quantity: 2,
            price: 15.99,
        },
        {
            id: 2,
            image: muff,
            name: 'Blueberry Muffins',
            description: 'Moist blueberry muffins with a hint of lemon.',
            quantity: 3,
            price: 12.49,
        },
        {
            id: 3,
            image: red,
            name: 'Red Velvet Cake',
            description: 'Classic red velvet cake with cream cheese frosting.',
            quantity: 1,
            price: 18.99,
        },
    ]);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = 5.99;

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        setCartItems(
            cartItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }),
        );
    };

    return (
        <>
            <div className="container w-full mx-auto mt-8 flex">
                <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
            </div>

            <div className="container w-full mx-auto mt-8 flex my-12">
                <div className="pr-8 w-full basis-1/2">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-md border-b-2 border-gray-200 p-4 mb-4">
                            <div className="flex items-center mb-2">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-md mr-4"
                                />
                                <div>
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">{item.description}</p>
                                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                                    <p className="text-gray-700">Price: ${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="text-red-600 font-semibold hover:text-red-800"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                                <div className="flex items-center justify-center">
                                    <button
                                        className="border w-12 rounded-full px-2 py-1"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity === 1}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        className="border w-12 rounded-full px-2 py-1"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 bg-gray-100 p-4 rounded-md">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-4">
                        <span>Subtotal:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping:</span>
                        <span>${shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="border-t mt-4 pt-4">
                        <div className="flex justify-between font-semibold mb-12">
                            <span>Total:</span>
                            <span>${(totalPrice + shippingCost).toFixed(2)}</span>
                        </div>
                        <Link to="/customer/checkout" className="px-6 py-2 mt-12 bg-blue-500 text-white rounded-md">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
