import { retrieveProductData } from '@/models/products';
import Image from 'next/image';
import Link from 'next/link';
import { Add_item_basket } from '@/components/Add_item_basket';

export default function VariantDetail({ params }) {
  const variantDetails = retrieveProductData(params.variantId);

  // Check if the variant details are available
  if (!variantDetails) {
    return <p>Variant not found</p>;
  }

  return (
    <div className="card-details">
      <div>
        <h2>{variantDetails.colour}</h2>
        <p>Price: £{variantDetails.price}</p>
        <p>Description: {variantDetails.description}</p>
        <Link href={`/products/${params.id}`}>Back to product</Link>
      </div>
      <Image
        src={variantDetails.image}
        alt={variantDetails.name}
        width={100}
        height={100}
      />
      <Add_item_basket product={variantDetails} />
      <Link href={'/basket'}>Basket</Link>
    </div>
  );
}
