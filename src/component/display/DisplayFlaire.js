import ProductCard from "../ProductCard"


export default function DisplayFlaire({products}){
  return (
    <>
    { products.length > 0 ? (
      products.map((product)=> (
        <ProductCard key={product.productuniqueid} product={product}/>
      ))
    ) : (
      <p>Currently No Product Here</p>
    )}
    </>
  )
}
