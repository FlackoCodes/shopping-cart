import { useDispatch } from "react-redux";
import { removeTodo } from "../store/slices/cart-slice";
/* eslint-disable react/prop-types */

export default function ItemTile({ cartItem }) {
  const dispatch = useDispatch();
  function removeItemFromCart() {
    dispatch(removeTodo(cartItem.id));
  }

  return (
    <div className="flex items-center p-5 justify-between my-2 bg-red-500 rounded-xl">
      <div className="flex p-3">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="h-28 rounded-lg"
        />
        <div className="ml-10 space-y-5">
          <h1 className="text-xl text-white font-bold">{cartItem?.title}</h1>
          <p className="text-white font-extrabold">{cartItem?.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={removeItemFromCart}
          className="capitalize bg-red-950 text-white rounded-md p-2 font-semibold"
        >
          remove from cart
        </button>
      </div>
    </div>
  );
}
