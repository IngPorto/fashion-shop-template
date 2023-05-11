import { iProduct } from "@type/components/Product.type";
import Product from "../Product/Product";

export default function ProductList({ products }: { products: iProduct[] }) {
  return (
    <div className="text-center my-12">
      <div className="grid grid-cols-4 overflow-hidden gap-3 mb-6">
        {!!products &&
          products.map((product) => <Product key={product.key} productData={product} />)}
      </div>
    </div>
  );
}


