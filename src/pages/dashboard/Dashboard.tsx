import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get<Product[]>('http://localhost:8000/api/products/');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const updateProduct = async (id: number, data: Partial<Product>) => {
        await axios.patch(`http://localhost:8000/api/products/${id}/`, data);
        const response = await axios.get<Product[]>('http://localhost:8000/api/products/');
        setProducts(response.data);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => updateProduct(product.id, { stock: product.stock + 1 })}>
                                    Increase Stock
                                </button>
                                <button onClick={() => updateProduct(product.id, { stock: Math.max(0, product.stock - 1) })}>
                                    Decrease Stock
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
