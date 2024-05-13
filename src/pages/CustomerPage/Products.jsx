import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import styles from './Products.module.css';
import httpClient from '../../utils/httpClient';
import Navbar from '../../components/navbar/StaffNavbar';
import Footer from '../../components/footer/Footer';
import { FaCartPlus } from 'react-icons/fa';

const Product = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Extract user ID from the token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken.id);
        }
    }, []);

    // Fetch all products
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await httpClient.get('/products');
                setData(response.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch products:', error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Handler for deleting a product
    const handleDelete = async (productId, creatorId) => {
        if (creatorId !== userId) {
            alert('You are not authorized to delete this product.');
            return;
        }
        try {
            await httpClient.delete(`/products/${productId}`);
            setData((prevData) => prevData.filter((product) => product.id !== productId));
        } catch (error) {
            console.error('Failed to delete product:', error);
            alert('Error deleting product.');
        }
    };

    // Handler for editing a product
    const handleEdit = (productId, creatorId) => {
        if (creatorId !== userId) {
            alert('You are not authorized to edit this product.');
            return;
        }
        navigate(`/edit-product/${productId}`);
    };

    if (isLoading) {
        return <p>Loading Products...</p>;
    }

    return (
        <div>
            <section>
                <div className={styles.title}>
                    <h1>Menu Of The Day</h1>
                </div>
                <div className={styles.products}>
                    {data.map((product, index) => (
                        <div key={index} className={styles.product}>
                            <div className={styles.image}>
                                <img src={product.images[0]} alt={product.name} />
                            </div>
                            <h2>{product.name}</h2>
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                            <div className={styles.buttons}>
                                <button>
                                    {' '}
                                    <FaCartPlus />{' '}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Product;
