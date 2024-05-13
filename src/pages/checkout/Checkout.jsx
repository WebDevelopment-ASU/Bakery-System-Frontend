import React, { useState } from 'react';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        apartment: '',
        city: '',
        country: 'Egypt',
        state: '',
        postalCode: '',
        phone: '',
        deliveryMethod: '',
        paymentType: '',
        cardNumber: '',
        cardName: '',
        expirationDate: '',
        cvc: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 rounded-lg">
            <div className="bg-white shadow-md rounded px-8 py-8 w-full max-w-lg">
                <h2 className="text-5xl mb-4">Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h3 className="text-lg mb-2">Contact Information</h3>
                        <label>Email address:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>First name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>Last name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>Company:</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>Apartment, suite, etc.:</label>
                        <input
                            type="text"
                            name="apartment"
                            value={formData.apartment}
                            onChange={handleChange}
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>State / Province:</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>Postal code:</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                        <label>Phone:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="block border border-gray-300 rounded py-2 px-4 w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg mb-2">Delivery Method</h3>
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="standardDelivery"
                                name="deliveryMethod"
                                value="Standard"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="standardDelivery" className="mr-4">
                                Standard (4-10 business days) - $5.00
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="expressDelivery"
                                name="deliveryMethod"
                                value="Express"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <label htmlFor="expressDelivery">Express (2-5 business days) - $16.00</label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg mb-2">Payment</h3>
                        <label>Payment type:</label>
                        <select
                            name="paymentType"
                            value={formData.paymentType}
                            onChange={handleChange}
                            className="block border border-gray-300 rounded py-2 px-4 w-full mb-2"
                        >
                            <option value="Credit card">Credit card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="eTransfer">eTransfer</option>
                        </select>
                        <label>Card number:</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            className="block border border-gray-300 rounded py-2 px-4 w-full mb-2"
                        />
                        <label>Name on card:</label>
                        <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleChange}
                            className="block border border-gray-300 rounded py-2 px-4 w-full mb-2"
                        />
                        <label>Expiration date (MM/YY):</label>
                        <input
                            type="text"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            className="block border border-gray-300 rounded py-2 px-4 w-full mb-2"
                        />
                        <label>CVC:</label>
                        <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleChange}
                            className="block border border-gray-300 rounded py-2 px-4 w-full mb-2"
                        />
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded"
                        >
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
