import { getAllProducts } from '@/models/products';

import {
  retrieveVariants,
  retrieveVariantDetails,
} from '@/models/variants';
import Image from 'next/image';
import Link from 'next/link';

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
    <div>
      <h1>Details about product {params.id}</h1>
      <p>Name: {selectedProduct.name}</p>
      <p>Price: £{selectedProduct.price}</p>
      <p>Description: {selectedProduct.description}</p>
      {hasVariants ? 
        <>
          <ul>
            {allVariants.map((variant) => (
              <li key={variant.colour}>
                <Link href={`/products/${params.id}/${variant.id}`}>
                  {variant.colour}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <li key={allVariants[0].id}>
              <Link
                href={`/products/${params.id}/${allVariants[0].id}`}
              >
                <div>
                  <p>Colour: {allVariants[0].colour}</p>
                  <Image
                    src={allVariants[0].image}
                    alt={allVariants[0].name}
                    width={200}
                    height={100}
                  />
                </div>
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <div>
          <p>Colour: {selectedProduct.colour}</p>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={200}
            height={100}
          />
        </div>
      )}
    </div>
  );
}
