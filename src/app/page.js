import { Display_products } from '@/components/Display_products';
import {
  getAllProductIds,
  retrieveUniqueProducts,
} from '@/models/products';
import Link from 'next/link';

export default async function Home() {
  // const allUniqueNames = await retrieveUniqueProductNames();

  // const productsInfo = [];
  // allUniqueNames.forEach((productName) => {
  //   productsInfo.push(getProductInfo(productName));
  // });

  const productsInfo = retrieveUniqueProducts();

  return (
    <main>
      <h1>Unwanted Crap</h1>
      <Display_products productsInfo={productsInfo} />
      <Link href="/basket">Basket</Link>
    </main>
  );
}
