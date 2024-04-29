import React from 'react';
// import styles from './Landing.module.css'

import banner from '../../images/landing1.png';
import del from '../../images/deliveryLogo.png';
import sell from '../../images/sellingLogo.png';
import cust from '../../images/customizeLogo.png';

// import { Link } from 'react-router-dom';

const service = [
    {
        name: 'Catering & Delivery',
        role: 'Swift and safe delivery services',
        imageUrl: del,
    },
    {
        name: 'Custom Cakes & Pastries',
        role: 'Baking happiness, one cake at a time',
        imageUrl: cust,
    },
    {
        name: 'Sell Your Product',
        role: 'Sell your bakings online with us',
        imageUrl: sell,
    },
];

const Landing = () => {
    return (
        <section className="bg-gray-100 pt-0 pb-16">
            <div className="relative">
                {/* Background image */}
                <img src={banner} alt="Bakery" className="w-full h-auto mb-8" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-25"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="container mx-auto text-center">
                        <h1 className="text-6xl font-bold text-white mb-6">Welcome to The Bakery Shop</h1>{' '}
                        {/* Adjusted font size */}
                        <p className="text-2xl text-gray-200 mb-8">
                            Discover our delicious range of baked goods made with love.
                        </p>{' '}
                        {/* Adjusted font size */}
                        <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl underline">
                            Our Baking Service
                        </h2>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {service.map((service) => (
                            <li key={service.name} className="hover:opacity-30">
                                <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={service.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                            {service.name}
                                        </h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                                            {service.role}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Landing;
