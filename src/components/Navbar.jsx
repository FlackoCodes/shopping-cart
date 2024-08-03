import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      <Link to={"/"}>
        <h1 className="uppercase text-red-900 font-bold F text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
          react redux shopping cart
        </h1>
      </Link>
      <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
        <Link to={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to={"/cart"}>
          <li className="cursor-pointer">Cart</li>
        </Link>
      </ul>
    </div>
  );
}
