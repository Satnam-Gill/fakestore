import axios from 'axios';
import { CreateProductParams, Product } from '@/types';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
    }
});

export const getProducts = async (
    sort: 'asc' | 'desc' = 'asc',
    limit?: number
): Promise<Product[]> => {
    const { data } = await api.get('/products', {
        params: {
            sort,
            limit,
        },
    });
    return data;
};

export const getProductsByCategory = async (category: string, sort: 'asc' | 'desc' = 'asc'): Promise<Product[]> => {
    const { data } = await api.get(`/products/category/${category}`, {
        params: { sort },
    });
    return data;
};

export const getProduct = async (id: string): Promise<Product> => {
    const { data } = await api.get(`/products/${id}`);
    return data;
};

export const getCategories = async (): Promise<string[]> => {
    const { data } = await api.get('/products/categories');
    return data;
};

export const createProduct = async (product: CreateProductParams): Promise<Product> => {
    const { data } = await api.post('/products', product);
    return data;
};

export default api;
