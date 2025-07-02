import { useState, useEffect } from "react";

const useArrivalProducts = () => {
  const [arrivalProducts, setarrivalProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
         "https://dummyjson.com/products/category/mobile-accessories")
        if (!response.ok) {
          throw new Error("Failed to fetch trending products");
        }
        const data = await response.json();
        setarrivalProducts(
          data.products.map((items) => ({ ...items, Quantity: 0 }))
        );
      } catch (err) {
        console.log(err);
        5;
      }
    };

    fetchData();
  }, []);

  return arrivalProducts;
};
export default useArrivalProducts;
