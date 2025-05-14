import { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { productsData } from '../utils/productsData';
import ProductCard from './productcard';

const Body = () => {
  const [topratedProducts, settopratedproducts] = useState([]);
  useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = async() => {
    const result = await fetch('https://fakestoreapi.com/products');
    const data = await result.json();
    settopratedproducts(data);
  };

  const topratedproductsData = () => {
    settopratedproducts (topratedProducts.filter((product) => product.rating.rate >= 4));
      console.log(topratedProducts);
    };
  

  return (
    <section className="flex flex-col gap-4 px-2 py-2">
      {/* Search Bar */}
      <div className="flex gap-3">
        <input
          type="text"
          className="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 hover:shadow-md"
          placeholder="Search..."
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={topratedproductsData}
        >
          Top Rated Products
        </button>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-4 product-items">
        {topratedProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Body;