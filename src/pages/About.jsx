import React from 'react';
import aboutImage from '../../public/images/Website_Homepage_Banner.webp'

const About = () => {
  return (
    <div className="bg-[#f5ede6] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="w-72 h-72 mx-auto overflow-hidden rounded-full">
            <img
              src={aboutImage}
              alt="About Us"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-[#333] space-y-4">
          <h2 className="text-3xl font-bold">About Us</h2>
          <h3 className="font-semibold">Welcome to Maverick Jewels</h3>
          <p>
            Where timeless craftsmanship meets bold innovation. We are a distinguished jewelry brand dedicated to creating exquisite pieces that celebrate individuality, elegance, and enduring quality.
          </p>
          <p>
            At Maverick Jewels, jewelry is a statement of identity, emotion, and heritage. Our collections are crafted using ethically sourced diamonds and premium materials.
          </p>
          <p>
            From bespoke engagement rings to heritage-inspired designs, every piece reflects our fearless maverick spirit and commitment to excellence.
          </p>
          <p>
            Discover the art of fine jewelry with Maverick Jewels —
            <em> Where Vision Becomes Treasure.</em>
          </p>
        </div>
      </div>

      {/* Extra Content Section */}
      <div className="max-w-4xl mx-auto mt-12 text-[#444] text-center space-y-5 leading-relaxed">
        <p>
          <strong>A Legacy of Craftsmanship. A Vision of Innovation.</strong><br />
          Born from a dream to break the mold, Maverick Jewels celebrates daring creativity and originality.
        </p>

        <p>
          <strong>Who We Are</strong><br />
          A team of passionate designers and artisans united by the mission to create inspiring and empowering jewelry.
        </p>

        <p>
          <strong>What We Do</strong><br />
          From bridal collections to bespoke designs, we blend traditional techniques with cutting-edge ideas.
        </p>

        <div className="text-left max-w-md mx-auto">
          <strong>What We Stand For</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Authenticity:</strong> Every piece tells a story — yours.</li>
            <li><strong>Innovation:</strong> We push boundaries with bold ideas.</li>
            <li><strong>Craftsmanship:</strong> Precision, patience, and passion.</li>
            <li><strong>Sustainability:</strong> Ethical sourcing and practices.</li>
            <li><strong>Customer Experience:</strong> Personalized, premium service from start to finish.</li>
          </ul>
        </div>

        <p>
          <strong>Our Vision:</strong> To become a global symbol of distinctive luxury by merging heritage with modernity.
        </p>

        <p>
          <strong>Our Mission:</strong> To craft meaningful jewelry that reflects each customer’s unique personality.
        </p>

        <p>
          <strong>Our Promise:</strong> More than jewelry — a lifelong memory wrapped in brilliance and elegance.
        </p>

        <p className="text-xl font-semibold text-[#222]">
          Maverick Jewels — Jewelry for the Bold. Elegance for the Visionary.
        </p>
      </div>
    </div>
  );
};

export default About;
