/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpRequest } from "../../services/axios.config";

export function ProductsList({ products, isLoading, error, order }) {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (product) => await HttpRequest.post("/cart", product),
    onError: (er) => console.log(er),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  return (
    <div className="w-3/4 grid grid-cols-3 gap-4">
      {products.sort((a, b)=> order === 'lowest' ? a.price - b.price : b.price - a.price).map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
          <p className="mt-1 text-gray-600">${product.price}</p>
          <button
            onClick={() => {
              mutate(product);
            }}
            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
