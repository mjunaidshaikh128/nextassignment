
const ProductCard = ({product}: any) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-3">
      <img className="w-full h-52" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Price: {product.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Size: {product.size}
        </span>
      </div>
    </div>
  )
}

export default ProductCard