import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import { useNavigate } from 'react-router-dom';

const Necklace = () => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/collection?category=necklaces');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-3
     py-2 bg-white max-w-6xl mx-auto gap-10">


     {/* Right: Text */}
     <div className="md:w-1/2  w-full   text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Necklace</h2>
        <p className="text-md text-gray-700 mb-1">Necklaces are decorative jewelry pieces that hang from a</p>
        <p className="text-md text-gray-700 mb-1">necklace or chain are often worn as a way to express personal</p>
        <p className="text-md text-gray-700 mb-6">style or to symbolize something meaningful to the wearer.</p>
        <SeeMoreButton onClick={handleSeeMore} />
      </div>

      {/* Left: Image */}
      <div className="md:w-1/2 w-full flex  ">
        <img 
          src="/images/necklaces/n1.jpg"
          // src="https://sgjewellery.com/cdn/shop/files/02_ab34c6c7-3d09-46ea-ab51-3773d2fd6ada.jpg?v=1684917668&width=1070" 
          alt="Necklace on Neck" 
          className="rounded-lg  h-auto  shadow-lg" 
        />
      </div>

     
    </div>
  );
};

export default Necklace;
