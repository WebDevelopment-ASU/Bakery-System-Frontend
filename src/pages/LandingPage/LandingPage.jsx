import React from 'react';
import { useNavigate } from 'react-router-dom';

import BestSellers from '../../components/BestSellers';

import banner from '../../images/landing1.png';
import land2 from '../../images/landing2.png';
import del from '../../images/deliveryLogo.png';
import sell from '../../images/sellingLogo.png';
import cust from '../../images/customizeLogo.png';

// Animation keyframes
const fadeAnimation = `
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

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
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/login');
    };

    return (
        <section className="bg-white">
            <style>
                {fadeAnimation}
                {`
                    .service-card {
                        transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                        padding: 1rem;
                        margin-bottom: 2rem;
                        background-color: white;
                        border-radius: 0.5rem;
                    }
                    .service-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                        background-color: #d4a181;
                    }
                    .vertical-photo {
                        filter: brightness(80%);
                        transition: filter 300ms ease-in-out;
                    }
                    .vertical-photo:hover {
                        filter: brightness(100%);
                    }
                `}
            </style>
            <div className="bg-gradient-to-r from-rose-200 to-rose-50 pt-16 pb-16">
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
                            <button onClick={handleRedirect} className="px-8 py-3 bg-[#ba825f] text-white font-semibold rounded-md hover:bg-[#a06846] focus:outline-none focus:bg-yellow-600">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="flex items-center justify-center">
                    {/* Left half: Baking service data */}
                    <div className="w-1/2">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-8">
                                Our Baking Service
                            </h2>
                            {service.map((service) => (
                                <div key={service.name} className="service-card">
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
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right half: Vertical photo */}
                    <div className="w-1/2 flex justify-center items-center animate-fade-in">
                        <img
                            src={land2}
                            alt="Bakery"
                            className="max-w-full max-h-96 h-auto rounded-md shadow-lg vertical-photo"
                            style={{ maxHeight: '90vh', maxWidth: '80vw', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>

            <BestSellers onProductClick={handleRedirect} />
        </section>
    );
};

export default Landing;
