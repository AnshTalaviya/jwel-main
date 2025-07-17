import React from 'react';
import SeeMoreButton from './SeeMoreButton';
import { useNavigate } from 'react-router-dom';

const Ring = () => {
  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate('/collection?category=rings');
  };


  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-3 pb-2 pt-10 bg-white max-w-6xl mx-auto gap-10">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full flex  ">
        <img
          src="/images/rings/r18.jpg"
          alt="Ring on Finger"
          className="rounded-lg  h-auto  shadow-lg  transition-transform duration-700 transform group-hover:scale-110"
        />
      </div>

      {/* Right: Text */}
      <div className="md:w-1/2 w-full   text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Ring</h2>
        <p className="text-md text-gray-700 mb-1">Encircling my hand with grace,
        </p>
        <p className="text-md text-gray-700 mb-1">A timeless promise we both embrace.</p>
        <p className="text-md text-gray-700 mb-1">This bond shall never fade or stray,
        </p>
        <p className="text-md text-gray-700 mb-6">A love that shines in every way.
        </p>
        <SeeMoreButton onClick={handleSeeMore} />
      </div>
    </div>
  );
};

export default Ring;
