import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import { useNavigate } from 'react-router-dom';

const Earing = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/collection?category=earrings');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-3 pb-10 pt-10 bg-white max-w-6xl mx-auto gap-10">

      {/* Left: Hexagon Image with Hover Effect */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img 
         src="/images/earrings/e37.jpg"
          // src="https://sgjewellery.com/cdn/shop/files/01_e61ce69a-7b7d-4bb6-aae6-3980bc05993a.jpg?v=1685003621&width=1070" 
          alt="Earrings on Ear" 
          className="rounded-lg h-auto shadow-lg"
        />
      </div>

      {/* Right: Text Section */}
      <div className="md:w-1/2 w-full text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Earring</h2>
        <p className="text-md text-gray-700 mb-1">
          Delicate earrings dangle with grace, sparkling gems catching the
        </p>
        <p className="text-md text-gray-700 mb-1">
          light on your face — perfect for any occasion or place.
        </p>
        <SeeMoreButton onClick={handleSeeMore} />
      </div>
    </div>
  );
};

export default Earing;
