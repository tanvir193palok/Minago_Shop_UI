import React, { useEffect, useState } from "react";

const useFeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products`);

        if (!response.ok) {
          throw new Error("Failed to fetch products from API");
        }

        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export default useFeaturedProducts;
