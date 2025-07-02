import { useState, useEffect } from "react";

const useTrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
         "https://dummyjson.com/products/category/laptops"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch trending products");
        }
        const data = await response.json();
        setTrendingProducts(
          data.products.map((items) => ({ ...items, Quantity: 0 }))
        );
      } catch (err) {
        console.log(err);
        5;
      }
    };

    fetchData();
  }, []);

  return trendingProducts;
};
export default useTrendingProducts;
