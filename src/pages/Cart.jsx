import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemTile from "../components/ItemTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  console.log(cart, totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex">
      {cart?.length ? (
        <>
          <div className="w-[300px]">
            <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl m-auto">
              <div className="flex items-center justify-center flex-col p-3"></div>
              {cart.map((cartItem, index) => (
                <ItemTile key={index} cartItem={cartItem} />
              ))}
            </div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your cart summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Items</span>
                <span>{cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Cost</span>
                <span>{totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] text-center capitalize flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-red-950 text-white rounded-md p-2 font-semibold">
              shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
