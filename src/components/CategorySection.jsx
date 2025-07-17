import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    {
      title: "One-Of-A-Kinds",
      image: "/images/rings/r2.jpg",
      category: 'rings'
    },
    {
      title: "High Tide Looks",
      image: "/images/necklaces/n1.jpg",
      category: 'necklaces'
    },
    {
      title: "New Organic Dôme",
      image: "/images/earrings/e2.jpg",
      category: 'earrings'
    },
    {
      title: "The Tiffany Icons",
      image: "/images/bracelets/b1.jpg",
      category: 'bracelates'
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <Slider {...settings}>
        {categories.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent text-white flex flex-col justify-end p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>

                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Featuring unique and hand-sourced gemstones from all over the world.
                </p>

                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {
                    item.category
                  }                </p>

                <Link to={`/collection?category=${encodeURIComponent(item.category)}`}>
                  <p className="text-sm mt-2 font-medium text-bgColorPink opacity-0 group-hover:opacity-100 transition-opacity duration-300 underline">
                    See More Products
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySection;
