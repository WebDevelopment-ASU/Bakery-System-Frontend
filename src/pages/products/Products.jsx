import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import httpClient from '../../utils/httpClient';
import Navbar from '../../components/navbar/StaffNavbar';
import Footer from '../../components/footer/Footer';

const Product = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await httpClient.get('/products');
                setData(response.data.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    return(
        <div>
            <Navbar />
            <section>
                <div className={styles.title}>
                    <h1>Menu Of The Day</h1>
                </div>
                <div className={styles.products}>
                    {data.map((product, index) => (
                        <div key={index} className={styles.product}>
                            <div className={styles.image}>
                                <img src={product.images} alt={product.name} />
                            </div>
                            <h2>{product.name}</h2>
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                            <div className={styles.buttons}>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Product;