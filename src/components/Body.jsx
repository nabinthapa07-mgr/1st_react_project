import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { productsData } from '../utils/productsData';

const ProductCard = ({ price, image, title, description, category }) => {
  return (
    <div className="relative flex flex-col gap-4 px-3 pt-3 pb-5 border-2 border-slate-200 w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group overflow-hidden">
      {/* Price Badge */}
      <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
        ${price}
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 left-3 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full z-10">
        {category}
      </div>

      {/* Product Image */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
        <img
          src={image}
          alt={title}
          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-lg font-semibold text-gray-900 mt-2 truncate" title={title}>
        {title}
      </h2>

      {/* Product Description */}
      <p className="text-gray-600 text-sm line-clamp-2 min-h-[2.5em]">{description}</p>

      {/* Add to Cart Button */}
      <button className="flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer">
        <FaCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

const Body = () => {
  const [topratedproduct, setTopRatedProduct] = React.useState(productsData);

  const topratedproductsData = () => {
    const filteredProducts = productsData.filter((product) => product.rating.rate >= 4);
    setTopRatedProduct(filteredProducts);
    console.log(filteredProducts);
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
        {topratedproduct.map((product) => (
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