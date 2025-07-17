import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Jewellary_Card from "./Jewellary_Card";
import FilterBar from "./FilterBar";
import Contact from '../pages/Contact'

const FilterProducts = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [availability, setAvailability] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  // Fetch products
  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        applyFilters(data, availability, priceSort, category);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [category]);

  // Re-apply filters when selection changes
  useEffect(() => {
    applyFilters(products, availability, priceSort, category);
  }, [availability, priceSort]);

  // Filter logic
  const applyFilters = (data, availability, priceSort, category) => {
    let result = [...data];

    if (category) {
      result = result.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // if (availability === "In Stock") {
    //   result = result.filter((item) => item.inStock > 0);
    // } else if (availability === "Out of Stock") {
    //   result = result.filter((item) => item.inStock <= 0);
    // }

    // if (priceSort === "low") {
    //   result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    // } else if (priceSort === "high") {
    //   result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    // }

    setFiltered(result);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize text-center">
        {category ? `${category} Collection` : "All Products"}
      </h2>

      <div className="p-2 mb-3">
        {/* <FilterBar
          onAvailabilityChange={setAvailability}
          onPriceChange={setPriceSort}
        /> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div key={product.id} className="w-full flex justify-center">
              <Jewellary_Card product={product} />
            </div>
          ))
        ) : (
          <p className="col-span-f ull text-center text-gray-500">
            No products found for "{category}"
          </p>
        )}
      </div>
      <Contact />
    </div>
  );
};

export default FilterProducts;
