import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import httpClient from '../../utils/httpClient';
import styles from './EditProduct.module.css';
import { toast } from 'sonner';

const EditProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await httpClient.get(`/products/${id}`);
                setProduct(response.data.data);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedProduct = {
            description: event.target.description.value,
            price: parseFloat(event.target.price.value),
            stock: parseInt(event.target.stock.value),
        };

        try {
            await httpClient.put(`/products/${id}`, updatedProduct);
            toast.success('Product Update successful!');
            navigate('/staff/products');
        } catch (error) {
            console.error('Failed to update product:', error);
            toast.error('Product Update Failed!');
        }
    };

    return product ? (
        <div className={styles.all}>
            <div className={styles.editProduct}>
                <h1>Edit Product</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" defaultValue={product.description} />

                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" defaultValue={product.price} />

                    <label htmlFor="stock">Stock</label>
                    <input type="number" id="stock" name="stock" defaultValue={product.stock} />

                    <button type="submit">Update Product</button>
                </form>
            </div>
        </div>
    ) : (
        <p>Loading product details...</p>
    );
};

export default EditProduct;
