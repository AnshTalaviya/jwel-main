// components/ReviewSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Brandon Kassis",
    text: "Prompt replies to my questions during shipping, and the ring is beautiful! 10 out of 10.",
    image: "https://i.imgur.com/YOUR_RING1.jpg",
  },
  {
    name: "Christian",
    text: "Giving heavy-handed a whole new meaning. Way over my expectations! It came beautifully.",
    image: "https://i.imgur.com/YOUR_RING2.jpg",
  },
  {
    name: "Julie P.",
    text: "Welp, we're doing this! Absolutely love my custom ring! It’s gorgeous!!!",
    image: "https://i.imgur.com/YOUR_RING3.jpg",
  },
];

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Let customers speak for us</h2>
      <p className="text-gray-500 mb-8">from 43 reviews</p>

      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="text-pink-400 text-xl mb-3">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{review.text}"</p>
              <h4 className="font-semibold text-gray-800 mb-2">{review.name}</h4>
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 object-cover rounded-full mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
