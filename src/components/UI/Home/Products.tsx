import ProductCard from "@/components/UI/Home/ProductCard";
import HeaderText from "@/components/util/HeaderText";

const Products = () => {
  const productList = [
    {
      image: "/images/product1.png",
      title: "Téléphone Duo",
      description: "Achetez votre combo Internet et téléphone illimité.",
    },
    {
      image: "/images/product2.png",
      title: "Duo Télé",
      description: "Achetez votre combo Internet et téléphone illimité.",
    },
    {
      image: "/images/product3.png",
      title: "Trio",
      description: "Achetez votre combo Internet et téléphone illimité.",
    },
  ];
  return (
    <div>
      <HeaderText>Combinez et économisez</HeaderText>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-3 lg:mx-28">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
