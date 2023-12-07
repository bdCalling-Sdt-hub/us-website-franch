import ProductCard from "@/components/UI/Home/ProductCard";
import HeaderText from "@/components/util/HeaderText";

const Products = () => {
  const productList = [
    {
      image: "/images/product1.png",
      title: "Duo Phone",
      description: "Shop for your unlimited internet and phone combo.",
    },
    {
      image: "/images/product2.png",
      title: "Duo Tv",
      description: "Shop for your unlimited internet and phone combo.",
    },
    {
      image: "/images/product3.png",
      title: "Trio",
      description: "Shop for your unlimited internet and phone combo.",
    },
  ];
  return (
    <div>
      <HeaderText>Combine and Save</HeaderText>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-3 lg:mx-28">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
