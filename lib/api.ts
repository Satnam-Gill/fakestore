import axios from 'axios';
import { CreateProductParams, Product } from '@/types';

const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: BASE_URL,
});

export const getProducts = async (
    sort: 'asc' | 'desc' = 'asc',
    limit?: number
): Promise<Product[]> => {
    // FakeStoreAPI doesn't support easy pagination + sort combo in one go perfectly for all fields,
    // but supports limit and sort.
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
