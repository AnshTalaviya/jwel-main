import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AddToWishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setWishlist(stored);
  }, []);

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-10 text-lg text-gray-600">
        Your wishlist is empty.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <img
              src={`/${item.imageFront}`}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              {/* <p className="text-sm text-gray-500 mt-1">
                ₹ {parseFloat(item.price.replace(/,/g, "")).toLocaleString()}
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AddToWishlist;
