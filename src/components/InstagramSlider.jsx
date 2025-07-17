import React, { useState } from "react";
import Slider from "react-slick";
import { FaInstagram } from "react-icons/fa";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const media = [
  {
    src: "/videos/ring1.mp4",
    description: "360° video view of the diamond ring",
  },
  {
    src: "/videos/bracelate1.mp4",
    description: "Glimpse of intricate craftsmanship",
  },
  {
    src: "/videos/necklace1.mp4",
    description: "Elegant ring worn in natural lighting",
  },
  {
    src: "/videos/earings1.mp4",
    description: "Close-up view of diamonds",
  },
  {
    src: "/videos/insta_video1.mp4",
    description: "Shimmering diamonds in motion",
  },
];

const InstagramSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const prevVideo = () => setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextVideo = () => setActiveIndex((prev) => (prev + 1) % media.length);

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-0 py-8">
      <Slider {...sliderSettings}>
        {media.map((item, index) => (
          <div key={index} className="!p-0">
            <div
              className="relative group cursor-pointer mx-auto w-[260px] rounded-xl overflow-hidden"
              onClick={() => openModal(index)}
            >
              <video
                className="w-full h-auto rounded-xl transition group-hover:opacity-60"
                muted
                autoPlay
                loop
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition rounded-xl">
                <FaInstagram className="text-white text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl max-w-xl w-full p-6 text-center">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={28} />
            </button>

            <video
              className="w-full max-w-[600px] h-auto rounded-xl shadow-md mx-auto"
              controls
              autoPlay
              loop
              muted
            >
              <source src={media[activeIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p className="mt-4 text-gray-800 text-base">
              {media[activeIndex].description}
            </p>

            <div className="flex justify-between mt-6">
              <button onClick={prevVideo} className="text-gray-700 hover:text-black">
                <ChevronLeft size={30} />
              </button>
              <button onClick={nextVideo} className="text-gray-700 hover:text-black">
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramSlider;
