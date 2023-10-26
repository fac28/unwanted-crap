import { Display_products } from '@/components/Display_products';
import { retrieveUniqueProducts } from '@/models/products';
import Navbar from '@/components/Navbar';

export default async function Home() {
  const productsInfo = retrieveUniqueProducts();

  return (
    <main>
      <Navbar />
      <Display_products productsInfo={productsInfo} />
    </main>
  );
}
