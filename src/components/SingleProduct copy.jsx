  import { useParams, Link } from "react-router-dom";
  import { useState, useEffect } from "react";
  import ShareDialog from "./ShareDialog";
  import ZoomHoverImage from "./ZoomHoverImage";
  import InquiryForm from "./InquiryForm";

  const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [showShare, setShowShare] = useState(false);
    const [showForm, setShowForm] = useState(false);

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
          setAllProducts(data);

          if (found) {
            const related = data.filter(
              (item) => item.category === found.category && item.id !== found.id
            );
            setRelatedProducts(related.slice(0, 4));
          }
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    }, [id]);

    if (!product) return <p className="text-center mt-10">Loading...</p>;

    const productUrl = `${window.location.origin}/product/${product.id}`;

    return (
      <>
        {/* Main Product Section */}
        <div className="max-w-7xl mx-auto p-2 m-3 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[70vh]">
          <div>
            <ZoomHoverImage
              src={`/${product.imageFront}`}
              alt={product.title}
            />
          </div>

          <div className="flex flex-col justify-center h-full items-center text-center md:text-left md:items-start">
            <p className="text-gray-600 text-sm mb-1">{product.brand}</p>
            <h1 className="text-3xl font-bold mb-3">{product.title}</h1>

            {product.description && (
              <p className="text-gray-700 text-sm mb-4 max-w-md">
                {product.description}
              </p>
            )}

            <p className="text-2xl font-semibold mb-3">
              ₹ {parseFloat(product.price.replace(/,/g, "")).toLocaleString()}
            </p>

            {/* Features Section */}
            {product.features && (
              <div className="mt-2 text-left w-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Features</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {product.features.material && (
                    <li><strong>Material:</strong> {product.features.material}</li>
                  )}
                  {product.features.edges && (
                    <li><strong>Edges:</strong> {product.features.edges}</li>
                  )}
                  {product.features.diamondLayout && (
                    <li><strong>Diamond Layout:</strong> {product.features.diamondLayout}</li>
                  )}
                  {product.features.setting && (
                    <li><strong>Setting:</strong> {product.features.setting}</li>
                  )}
                  {product.features.diamondWeight && (
                    <li><strong>Diamond Weight:</strong> {product.features.diamondWeight}</li>
                  )}
                  {product.features.finish && (
                    <li><strong>Finish:</strong> {product.features.finish}</li>
                  )}
                </ul>

                {product.features.designHighlights?.length > 0 && (
                  <>
                    <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">
                      Design Highlights
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {product.features.designHighlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}

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
          <InquiryForm
            product={product}
            onClose={() => setShowForm(false)}
          />
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="max-w-6xl mx-auto px-6 mt-16 mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="block border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <div className="w-full h-48">
                    <img
                      src={`/${item.imageFront}`}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      ₹ {parseFloat(item.price.replace(/,/g, "")).toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  export default SingleProduct;
