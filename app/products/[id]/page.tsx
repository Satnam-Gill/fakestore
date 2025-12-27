import { getProduct } from '@/lib/api';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/products/ProductDetails';

export const revalidate = 3600;

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    let product = null;
    try {
        product = await getProduct(id);
    } catch (error) {
        return notFound();
    }

    if (!product) {
       return notFound();
    }

    return <ProductDetails product={product} />;
}
