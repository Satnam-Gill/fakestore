import { CreateProductParams, Product } from '@/types';

const BASE_URL = 'https://fakestoreapi.com';
const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'application/json',
};

async function fetchJson<T>(url: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            ...HEADERS,
            ...options.headers,
        },
    });
    if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
    }
    return res.json();
}

export const getProducts = async (
    sort: 'asc' | 'desc' = 'asc',
    limit?: number
): Promise<Product[]> => {
    const query = new URLSearchParams({ sort });
    if (limit) query.append('limit', limit.toString());

    // next: { revalidate: 3600 } can be added here if we want global caching
    return fetchJson<Product[]>(`/products?${query.toString()}`);
};

export const getProductsByCategory = async (category: string, sort: 'asc' | 'desc' = 'asc'): Promise<Product[]> => {
    const query = new URLSearchParams({ sort });
    return fetchJson<Product[]>(`/products/category/${category}?${query.toString()}`);
};

export const getProduct = async (id: string): Promise<Product> => {
    return fetchJson<Product>(`/products/${id}`);
};

export const getCategories = async (): Promise<string[]> => {
    return fetchJson<string[]>('/products/categories');
};

export const createProduct = async (product: CreateProductParams): Promise<Product> => {
    return fetchJson<Product>('/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
};

export default {
    getProducts,
    getProduct,
    getCategories,
    createProduct,
    getProductsByCategory
};
