import { useState, useEffect } from "react";


const useProducts = () => {
  const [Prodcuts, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
         "https://dummyjson.com/products?limit=30&skip=30&select=title,price,description,images,brand")
        if (!response.ok) {
          throw new Error("Failed to fetch trending products");
        }
        const data = await response.json();
        setProducts(
          data.products.map((items) => ({ ...items, Quantity: 0 }))
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return Prodcuts;
};
export default useProducts;
