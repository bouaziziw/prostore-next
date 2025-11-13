import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { Product } from '@/types';

// const delay = (ms: number | undefined) =>
//   new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const products: Product[] = latestProducts.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));
  return (
    <>
      <ProductList data={products} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default Homepage;
