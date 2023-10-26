import { Display_products } from '@/components/Display_products';
import { retrieveUniqueProducts } from '@/models/products';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  const productsInfo = retrieveUniqueProducts();

  return (
    <main>
      <h1>Unwanted Crap</h1>
      <Link className={styles.basketLink} href="/basket">
        🧺
      </Link>
      <div className="flex">
        <Display_products productsInfo={productsInfo} />
      </div>
    </main>
  );
}
