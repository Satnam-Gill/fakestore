import { getProduct, getProducts } from '@/lib/api';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/products/ProductDetails';

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      id: String(product.id),
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

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
