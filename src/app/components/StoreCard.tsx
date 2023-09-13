import Link from "next/link";

const StoreCard = ({ store }: any) => {
  return (
    <Link href={`/store/${store.slug}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mr-3">
        <img className="w-52 h-52" src={store.image} alt="Store" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{store.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;
