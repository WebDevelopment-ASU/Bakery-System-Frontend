import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import httpClient from '../../utils/httpClient';
import styles from './CreateProduct.module.css';
import { toast } from 'sonner';

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        images: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.name === 'images') {
            setFormData({ ...formData, images: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        data.append('stock', formData.stock);
        if (formData.images) {
            data.append('images', formData.images);
        }

        try {
            const response = await httpClient.post('/products/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Product Created successful!');
            navigate('/staff/products');
        } catch (error) {
            console.error('Failed to create product:', error);
            toast.error('Product Created Failed!');
        }
    };

    return (
        <div>
            <div className={styles.container}>
                <h1>Create New Product</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                    />
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="Stock"
                        required
                    />
                    <input type="file" name="images" onChange={handleChange} accept="image/*" />
                    <button type="submit">Create Product</button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
