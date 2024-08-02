import { Cart } from "../../components/cart/cart";
import { ProductsList } from "../../components/productsList/productsList";

/* eslint-disable react/prop-types */
export function Home({ number = 6 }) {
  return (
    <>
      <div className="header w-full h-10 bg-blue-950 text-white text-left pl-4">
        <p className="text-white py-2">React Shopping Website</p>
      </div>
      <div className="control flex w-9/12 justify-between p-4 mx-auto">
        <div className="productsNumber">
          <p>{number} Products</p>
        </div>
        <div className="order flex items-center">
          <p>Order</p>
          <select name="price" id="price">
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter flex items-center">
          <p>Filter</p>
          <select name="filter" id="filter">
            <option value="all">All</option>
            <option value="all">Xs</option>
            <option value="all">S</option>
            <option value="all">M</option>
            <option value="all">L</option>
            <option value="all">Xl</option>
            <option value="all">XXl</option>
          </select>
        </div>
      </div>
      <div className="line h-1 w-9/12 border-b border-black flex mx-auto"></div>
      <div className="flex p-8 justify-between">
        <Cart />
        <ProductsList />
      </div>
    </>
  );
}
