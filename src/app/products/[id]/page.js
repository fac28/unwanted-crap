import { getAllProducts } from '@/models/products';

import {
  retrieveVariants,
  retrieveVariantDetails,
} from '@/models/variants';
import Image from 'next/image';
import Link from 'next/link';
import { Add_item_basket } from '@/components/Add_item_basket';

export default function ProductDetail({ params }) {
  // Retrieve unique product information
  const productInfo = getAllProducts();

  // Find the selected product by productId
  const selectedProduct = productInfo[params.id];

  // Check if the productId is valid
  if (!selectedProduct) {
    return <p>Invalid product ID</p>;
  }

  // Check if the product has variants
  const variantNames = retrieveVariants();
  const hasVariants = variantNames.includes(selectedProduct.name);

  // Retrieve variant details if available
  let allVariants = [];
  if (hasVariants) {
    allVariants = retrieveVariantDetails(selectedProduct.name);
  }

  // variant id is the unique product id

  return (
    <div className="card-details">
      <h1>{selectedProduct.name}</h1>
      <Link href={`/`}>All products</Link>
      <p>Price: £{selectedProduct.price}</p>
      <p>Description: {selectedProduct.description}</p>
      {hasVariants ? (
        <>
          <div>
            <Image
              src={allVariants[0].image}
              alt={allVariants[0].name}
              width={200}
              height={100}
            />
          </div>
          <ul className="variants">
            {allVariants.map((variant) => (
              <li key={variant.colour}>
                <Link href={`/products/${params.id}/${variant.id}`}>
                  {variant.colour}
                </Link>
              </li>
            ))}
          </ul>
          <Add_item_basket product={selectedProduct} />
          <Link href={'/basket'}>Basket</Link>
        </>
      ) : (
        <div>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={200}
            height={100}
          />
          <p>Colour: {selectedProduct.colour}</p>
          <Add_item_basket product={selectedProduct} />
          <Link href={'/basket'}>Basket</Link>
        </div>
      )}
    </div>
  );
}
