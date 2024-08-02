import { useState } from "react";
import { Cart } from "../../components/cart/cart";
import { ProductsList } from "../../components/productsList/productsList";
import { useGetProducts } from "../../hooks/useGetProducts";
import { useGetSizes } from "../../hooks/useGetSizes";

/* eslint-disable react/prop-types */
export function Home() {
  const [size, setSize] = useState("");
  const [order, setOrder] = useState('lowest')
  const { data: products, isLoading, error } = useGetProducts(size);
  const { data: sizes } = useGetSizes();


  return (
    <>
      <div className="header w-full h-10 bg-blue-950 text-white text-left pl-4">
        <p className="text-white py-2">React Shopping Website</p>
      </div>
      <div className="control flex w-9/12 justify-between p-4 mx-auto">
        <div className="productsNumber">
          <p> Products</p>
        </div>
        <div className="order flex items-center">
          <p>Order</p>
          <select name="price" id="price" onClick={(e)=> setOrder(e.target.value)}>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter flex items-center">
          <p>Filter</p>
          <select
            name="filter"
            id="filter"
            onClick={(e) => setSize(e.target.value)}
          >
            {sizes?.map((siz) => {
              return (
                <>
                  <option value={siz.id}>{siz.name}</option>
                </>
              );
            })}
          </select>
        </div>
      </div>
      <div className="line h-1 w-9/12 border-b border-black flex mx-auto"></div>
      <div className="flex p-8 justify-between flex-row-reverse">
        <Cart />
        <ProductsList products={products} isLoading={isLoading} error={error} order={order}/>
      </div>
    </>
  );
}
