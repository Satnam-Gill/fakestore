import { getProduct } from '@/lib/api';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/products/ProductDetails';

export const revalidate = 3600;

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  try {
    const product = await getProduct(id);
    if (!product) {
      return notFound();
    }

    return <ProductDetails product={product} />;
  } catch (error) {
    console.error('Error fetching product in component:', error);
    return notFound();
  }
}
