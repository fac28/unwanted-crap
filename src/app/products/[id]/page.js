import { retrieveUniqueProducts} from "@/models/products";
import Image from "next/image"

const productInfo = retrieveUniqueProducts()


function isValidProductId(id) {
  return id >= 1 && id < productInfo.length;
}

export default function ProductDetail(props) {
  const productID = props.params.id;

  if (!isValidProductId(productID)) {
    return <p>Invalid product ID</p>;
  }

  // select from productInfo where index is productID
  const selectedProduct = productInfo[productID];

  if (!selectedProduct) {
    return <p>Loading product information...</p>;
  }

  return (
    <div>
      <h1>Details about product {props.params.id}</h1>
      <p>Name: {selectedProduct.name}</p>
      <p>Price: ${selectedProduct.price}</p>
      <p>Description: {selectedProduct.description}</p>
      <p>Colour: {selectedProduct.colour}</p>
      <Image
        src={selectedProduct.image}
        alt={selectedProduct.name}
        width={200}
        height={100}
      />
    </div>
    // <div> {productInfo}</div>
  );
}
