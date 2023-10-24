import Image from "next/image"

export const Display_products = ({productsInfo}) => {
    return (
        <div className="card">
          {productsInfo.map((product) => {
            return <div key={product.id}>
                <Image priority src= {product.image} width={100} height={100} alt={product.name}/>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
          }
          )}
      </div>
    )
}