import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import StoreCard from "./components/StoreCard";

const prisma = new PrismaClient();

const fetchClothingStores = async (): Promise<any[]> => {
	const clothingStores = await prisma.clothingStore.findMany();
	return clothingStores;
}

export default async function Home() {
	const clothingStores = await fetchClothingStores();

	return (
		<main>
			{/* <Header /> */}
			<div className="py-3 px-36 mt-10 flex flex-wrap">
				{clothingStores.map((store) => (
          <StoreCard store={store} />
				))}
			</div>
		</main>
	);

}
