import React from 'react';
import { Link } from 'react-router-dom';

import choco from '../images/ChocolateCake.png';
import muff from '../images/blueberrymuffins.png';
import red from '../images/RedVelvetCake.png';
import vanil from '../images/VanillaCupCakes.png';
import tart from '../images/FruitTart.png';
import chee from '../images/CheeseCake.png';
import lemo from '../images/LemonBars.png';
import straw from '../images/StrawberryShortcaker.png';

const BestSellers = () => {
    const BestSellers = [
        {
            id: 1,
            name: 'Chocolate Cake',
            description: 'Delicious chocolate cake with rich flavor.',
            imageUrl: choco,
        },
        {
            id: 2,
            name: 'Blueberry Muffins',
            description: 'Moist blueberry muffins with a hint of lemon.',
            imageUrl: muff,
        },
        {
            id: 3,
            name: 'Red Velvet Cake',
            description: 'Classic red velvet cake with cream cheese frosting.',
            imageUrl: red,
        },
        {
            id: 4,
            name: 'Vanilla Cupcakes',
            description: 'Delicate vanilla cupcakes topped with buttercream icing.',
            imageUrl: vanil,
        },
        {
            id: 5,
            name: 'Fruit Tart',
            description: 'Colorful fruit tart with a buttery pastry crust.',
            imageUrl: tart,
        },
        {
            id: 6,
            name: 'Cheesecake',
            description: 'Creamy cheesecake with a graham cracker crust.',
            imageUrl: chee,
        },
        {
            id: 7,
            name: 'Lemon Bars',
            description: 'Zesty lemon bars with a shortbread crust.',
            imageUrl: lemo,
        },
        {
            id: 8,
            name: 'Strawberry Shortcake',
            description: 'Sweet strawberry shortcake with whipped cream.',
            imageUrl: straw,
        },
    ];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
                <h2 className="text-3xl italic font-extrabold tracking-wide text-gray-900 mb-8 w-full">Best Sellers</h2>

                <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                    {BestSellers.map((product) => (
                        <Link key={product.id} to="/login">
                            <div
                                key={product.id}
                                className="cursor-pointer group relative overflow-hidden transform transition duration-300 hover:scale-125"
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
