import React, { useState, useEffect } from 'react';
import Jewellary_Card from '../components/Jewellary_Card';

const ViewAllJewellary = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error loading jewellers.json:", error);
      });
  }, []);

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        All Jewellery Products
      </h1>

      {products.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <Jewellary_Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No products available.</p>
      )}
    </div>
  );
};

export default ViewAllJewellary;
