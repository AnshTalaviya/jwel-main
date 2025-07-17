import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

const Jewellary_Card = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyFavorite = favorites.some((item) => item.id === product.id);
    setIsFavorite(alreadyFavorite);
  }, [product.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((item) => item.id !== product.id);
    } else {
      favorites.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group relative w-full sm:w-80 bg-[#fcdcdd] rounded-md shadow hover:shadow-lg transform hover:scale-105 transition-all duration-500 overflow-hidden">
      
      {/* ❤️ Favorite Icon */}
      <div
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 bg-white/70 hover:bg-white rounded-full p-2 cursor-pointer shadow"
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        <FiHeart className={`text-xl transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-700'}`} />
      </div>

      {/* Image */}
      <div className="w-full aspect-[4/3] relative overflow-hidden bg-white">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageFront}
            alt={product.title}
            className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Product Info */}
      <div className="text-center py-3 px-3 space-y-1">
        <p className="text-xs text-gray-500 capitalize">{product.category}</p>
        <h2 className="text-md font-semibold text-gray-800">{product.title}</h2>
      </div>
    </div>
  );
};

export default Jewellary_Card;
