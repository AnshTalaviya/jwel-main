import React, { useState, useEffect } from 'react';
import Jewellary_Card from '../components/Jewellary_Card';
import { Link } from 'react-router-dom';

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const firstTenProducts = products.slice(0, 10);

  return (
    <>
      <h1 className='text-4xl text-center font-bold py-5 ms-16'>Jewellery Collection</h1>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {firstTenProducts.map((product) => (
          <Jewellary_Card key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      {/* <div className="text-center">
        <Link to="/view-all-jewellary">
          <button className="bg-black text-white px-6 py-2 mt-5 rounded-full shadow-md hover:shadow-lg transition duration-300">
            View All
          </button>
        </Link>
      </div> */}
    </>
  );
};

export default Collection;
