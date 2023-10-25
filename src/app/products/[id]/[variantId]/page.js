import { retrieveProductData } from '@/models/products';
import Image from 'next/image';
import Link from 'next/link';

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
        <Link href={`/products/${params.id}`}>Back to product</Link>
      </div>
      <Image
        src={variantDetails.image}
        alt={variantDetails.name}
        width={100}
        height={100}
      />
    </div>
  );
}
