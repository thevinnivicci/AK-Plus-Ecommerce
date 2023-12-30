"use client";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { getProductLists } from "./services";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories";
import ProductCard from "./components/ProductCard";
import Scooty from "./components/Scooty";

export default function Home() {
  const [productLists, setProductLists] = useState([]);

  useEffect(() => {
    getProductLists_();
  }, []);

  const getProductLists_ = async () => {
    try {
      const result: any = await getProductLists();
      setProductLists(result.productLists);
    } catch (error) {
      console.error("Error fetching product lists:", error);
    }
  };

  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <ProductCard />
      <ProductList productLists={productLists} />
      <Scooty />
    </main>
  );
}
