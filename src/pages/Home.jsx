import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 max-w-6xl mx-auto p-3">
         {
          products && products.length ? (products.map((productItem, index) => <Product key={index} product={productItem}/>)): null
         }
      </div> }
    </div>
  );
}
