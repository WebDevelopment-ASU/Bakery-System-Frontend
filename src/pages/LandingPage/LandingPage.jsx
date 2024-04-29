import React from 'react';
// import styles from './Landing.module.css'

import banner from '../../images/landing1.png';

// import { Link } from 'react-router-dom';

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
        </section>
    );
};

export default Landing;
