import Image from "next/image";
import React from "react";

interface IProduct {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="card bg-gray-800 text-gray-400">
      <figure className="bg-gray-200">
        <Image src={product.image} alt="Shoes" width={310} height={500} />
      </figure>
      <div className="card-body items-center text-center text-gray">
        <h2 className="card-title text-2xl mb-2">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions mt-4">
          <button className="btn bg-[#1775fa] text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
