/* eslint-disable no-unused-vars */

import { useGetCartProducts } from "../../hooks/useGetCartProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpRequest } from "../../services/axios.config";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export function Cart() {
  const { data: {result: cartItems, totalPrice}, isLoading, error } = useGetCartProducts();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (productId) =>
      await HttpRequest.delete(`/cart/${productId}`),
    onError: (er) => console.log(er),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  return (
    <>
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-y-4">
        <h2 className="text-lg font-bold mb-4">Cart</h2>
        {isLoading || error ? (
          <>
            <p className="text-gray-500">{isLoading}</p>
            <p className="text-gray-500">{error}</p>
          </>
        ) : (
          <div>
            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="mb-2 flex justify-between items-center flex-col border rounded-2xl pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-auto object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => mutate(item.id)}
                  className="text-white py-1 px-2 bg-red-600 rounded-xl"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <button>Total: {totalPrice}</button>
      </div>
    </>
  );
}
