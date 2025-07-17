import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShareDialog from "./ShareDialog";
import ZoomHoverImage from "./ZoomHoverImage";
import InquiryForm from "./InquiryForm";
import { FiHeart } from "react-icons/fi";

// ✅ Dynamic Feature Renderer Component
const ProductFeatures = ({ features }) => {
  const formatKey = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const renderFeatureValue = (value) => {
    if (typeof value === "string" || typeof value === "number") {
      return <span>{value}</span>;
    } else if (Array.isArray(value)) {
      return (
        <ul className="ml-4 list-disc list-inside">
          {value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else if (typeof value === "object" && value !== null) {
      return (
        <ul className="ml-4 list-disc list-inside">
          {Object.entries(value).map(([subKey, subVal], index) => (
            <li key={index}>
              <strong>{formatKey(subKey)}:</strong> {renderFeatureValue(subVal)}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="mt-4 text-left w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Features</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {Object.entries(features).map(([key, value], i) => (
          <li key={i}>
            <strong>{formatKey(key)}:</strong> {renderFeatureValue(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ MAIN COMPONENT
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showShare, setShowShare] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [relatedFavorites, setRelatedFavorites] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/jewellers.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load product");
        return res.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);

        if (found) {
          const related = data.filter(
            (item) => item.category === found.category && item.id !== found.id
          );
          setRelatedProducts(related.slice(0, 4));

          const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          setIsFavorite(favorites.some((item) => item.id === found.id));

          // Build map of related product IDs to favorite status
          const relatedFavs = {};
          related.forEach((item) => {
            relatedFavs[item.id] = favorites.some((f) => f.id === item.id);
          });
          setRelatedFavorites(relatedFavs);
        }
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((item) => item.id !== product.id);
    } else {
      favorites.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  const handleRelatedFavoriteToggle = (item) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyFavorite = favorites.some((f) => f.id === item.id);
    if (alreadyFavorite) {
      favorites = favorites.filter((f) => f.id !== item.id);
    } else {
      favorites.push(item);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setRelatedFavorites((prev) => ({
      ...prev,
      [item.id]: !alreadyFavorite,
    }));
  };

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  const productUrl = `${window.location.origin}/product/${product.id}`;

  return (
    <>
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto p-2 m-3 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[70vh]">
        <div className="relative">
          <ZoomHoverImage src={`/${product.imageFront}`} alt={product.title} />
          <div
            onClick={handleFavoriteClick}
            className="bg-white/50 absolute top-0 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer"
          >
            <FiHeart
              className={`text-3xl transition-colors duration-200 ${
                isFavorite ? "text-red-500" : "text-gray-800"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center h-full items-center text-center md:text-left md:items-start">
          <p className="text-gray-600 text-sm mb-1">{product.brand}</p>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

          {product.description && (
            <p className="text-gray-700 text-sm mb-4 max-w-md">
              {product.description}
            </p>
          )}

          {/* ✅ Features */}
          {product.features && <ProductFeatures features={product.features} />}

          {/* Metal Type */}
          {product.metal && (
            <div className="mb-4 w-full mt-4">
              <label className="block mb-1 text-sm">METAL TYPE</label>
              <select className="w-full border px-4 py-2 rounded">
                <option>{product.metal}</option>
              </select>
            </div>
          )}

          {/* Ring Size */}
          {product.sizes && (
            <div className="mb-4 w-full">
              <label className="block mb-1 text-sm">Ring Size</label>
              <select className="w-full border px-4 py-2 rounded">
                {product.sizes.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-4 w-2/5">
            <button
              onClick={() => setShowForm(true)}
              className="bg-black text-white px-5 py-2 rounded shadow hover:bg-gray-800"
            >
              Inquiry Now
            </button>
            <button
              onClick={() => setShowShare(true)}
              className="bg-black text-white px-5 py-2 rounded shadow hover:bg-gray-800"
            >
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Share Dialog */}
      <ShareDialog
        show={showShare}
        onClose={() => setShowShare(false)}
        productUrl={productUrl}
        title={product.title}
      />

      {/* Inquiry Form */}
      {showForm && (
        <InquiryForm product={product} onClose={() => setShowForm(false)} />
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 mt-16 mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div key={item.id} className="relative group rounded-lg shadow hover:shadow-lg overflow-hidden transition">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={`/${item.imageFront}`}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-3">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>

                {/* ❤️ Favorite Icon */}
                <div
                  onClick={() => handleRelatedFavoriteToggle(item)}
                  className="absolute top-2 right-2 z-10 bg-white/70 hover:bg-white rounded-full p-2 cursor-pointer shadow"
                >
                  <FiHeart
                    className={`text-xl transition-colors ${
                      relatedFavorites[item.id] ? "text-red-500" : "text-gray-700"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
