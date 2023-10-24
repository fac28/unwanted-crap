
import { Display_products } from "@/components/Display_products";
import { retrieveUniqueProductNames, retrieveProductData, getProductInfo } from "@/models/products"

export default async function Home() {
  const allUniqueNames = await retrieveUniqueProductNames()

  const productsInfo = [];
  allUniqueNames.forEach((productName) => {
      productsInfo.push(getProductInfo(productName))
    })
  

  return (
    <main>
      <h1>Unwanted Crap</h1>
      <Display_products productsInfo={productsInfo} />
    </main>
  )
}


// {
//   id: 4,
//   name: 'Rainbow Unicorn Slippers',
//   price: 19.99,
//   image: 'temp.jpg'
// }
