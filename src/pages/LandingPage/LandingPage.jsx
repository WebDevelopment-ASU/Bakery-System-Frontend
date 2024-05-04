import React from 'react';

import BestSellers from '../../Components/BestSellers';

import banner from '../../images/landing1.png';
import del from '../../images/deliveryLogo.png';
import sell from '../../images/sellingLogo.png';
import cust from '../../images/customizeLogo.png';

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
        <section className="bg-rose-50 pt-0 pb-16">
            <div className="flex items-center justify-center">
                {/* Banner photo */}
                <div className="w-1/2">
                    <img src={banner} alt="Bakery" className="w-full h-auto rounded-full transform" />
                </div>

                {/* Content */}
                <div className="w-1/2 p-8 text-center">
                    <div className="container mx-auto">
                        <h1 className="text-6xl font-bold text-gray-800 mb-6">Welcome to The Bakery Shop</h1>
                        <p className="text-2xl text-gray-800 mb-8">
                            Discover our delicious range of baked goods made with love.
                        </p>
                        <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-8">
                        Our Baking Service
                    </h2>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
                        {service.map((service) => (
                            <div
                                key={service.name}
                                className="cursor-pointer w-full sm:w-auto hover:scale-105 transition-transform duration-300"
                            >
                                <div className="border p-4 rounded-lg shadow-md flex items-center gap-x-6 hover:shadow-lg">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BestSellers />
        </section>
    );
};

export default Landing;
