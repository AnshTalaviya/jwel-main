import React from 'react';

const RingSizeGuide = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Ring Size Guide
      </h2>

      {/* First Image Section */}
      <div className="flex justify-center mb-6">
        <img
          src="https://cdn.shopify.com/s/files/1/0738/5707/3428/files/Frame_7_1024x1024.jpg?v=1684305465"
          alt="Ring Size Guide"
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
      </div>

      {/* Description */}
      <div className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        <p>
          Our printable finger sizer will help you to measure your ring size accurately.
          You can also compare your ring size against sizes in other countries with
          our international finger size chart that you can find here.
        </p>
      </div>

      {/* Second Image Section */}
      <div className="flex justify-center">
        <img
          src="https://cdn.shopify.com/s/files/1/0738/5707/3428/files/Frame_9_1024x1024.jpg?v=1684305547"
          alt="International Size Chart"
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default RingSizeGuide;
