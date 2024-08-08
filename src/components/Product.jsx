/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../store/slices/cart-slice";
export default function Product({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function addItemToCart() {
    dispatch(addTodo(product));
  }

  function removeItemFromCart() {
    dispatch(removeTodo(product.id));
  }

  const {
    image,
    category,
    description,
    price,
    id,
    title,
    rating: { rate },
  } = product;

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col items-center border-2 rounded-md border-red-900 gap-3 p-4 h-[360]">
      <div className="h-[180px]">
        <img src={image} alt={title} className="object-cover h-full w-full" />
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-lg text-gray-700 font-bold">
          {title}
        </h1>
      </div>
      <div className="flex justify-center items-center w-full mt-5">
        <button
          onClick={isInCart ? removeItemFromCart : addItemToCart}
          className="capitalize bg-red-950 text-white rounded-md p-2 font-semibold"
        >
          {isInCart ? "remove from cart" : "add to cart"}
        </button>
      </div>
    </div>
  );
}
