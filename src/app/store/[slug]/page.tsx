import { PrismaClient } from "@prisma/client";
import ProductCard from "./components/ProductCard";

const prisma = new PrismaClient();

const fetchProducts = async (): Promise<any[]> => {
	const products = await prisma.product.findMany();
	return products;
}
const ClothingStoreProducts = async () => {
    const products = await fetchProducts();

  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap">
				{products.map((product) => (
          <ProductCard product={product} />
				))}
			</div>
  )
}

export default ClothingStoreProducts