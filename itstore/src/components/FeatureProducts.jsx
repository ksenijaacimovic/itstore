import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error("Oops! An error has occured");
        const json = await res.json();
        setProducts(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="container mx-auto">
      <h2 className="text-4xl py-10 text-center font-medium text-gray-700">
        Feature Products
      </h2>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto pb-20">
        {loading ? (
          <p>Loading...</p>
        ) : (
          products
            .filter((product) => product.id % 5 === 0)
            .map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))
        )}
      </div>
    </section>
  );
};

export default FeatureProducts;
