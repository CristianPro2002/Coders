import { useGetProducts } from "../../../../utils/hooks/useGetProducts";
import "./Products.css";

export default function Products() {
  const { products } = useGetProducts();
  console.log(products);
  return (
    <main className="products">
      <h2>Products</h2>
      <section className="products-contentProductsNames">
        {products.map((product, index) => (
          <div key={index} className="products-contentProduct">
            <p>{product.name["es"]}</p>
          </div>
        ))}
      </section>
      <section className="products-contentProducts">

      </section>
    </main>
  );
}
