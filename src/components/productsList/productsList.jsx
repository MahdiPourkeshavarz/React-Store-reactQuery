import { useState } from "react";
import { useGetProducts } from "../../hooks/useGetProducts";

export function ProductsList() {
  const [size, setSize] = useState("");
  const { data: products, isLoading, error } = useGetProducts(size);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="w-3/4 grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
          <p className="mt-1 text-gray-600">${product.price}</p>
          <button
            onClick={() => setSize(product.size.id)}
            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
