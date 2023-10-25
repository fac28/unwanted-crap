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
    <div>
      <Link href={`/products/${params.id}`}>
        <h1>Variant {params.variantId} Details</h1>
      </Link>
      <p>Colour: {variantDetails.colour}</p>
      <p>Size: {variantDetails.size} </p>
      <Image
        src={variantDetails.image}
        alt={variantDetails.name}
        width={200}
        height={100}
      />
    </div>
  );
}
