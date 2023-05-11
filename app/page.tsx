import AdTypeA from "@comp/UI/AdTypeA/AdTypeA";
import AdTypeB from "@comp/UI/AdTypeB/AdTypeB";
import CategoryGrid from "@comp/UI/CategoryGrid/CategoryGrid";
import Hero from "@comp/UI/Hero/Hero";
import ProductList from "@comp/UI/ProductList/ProductList";
import React from "react";
import { categories } from "@data/components/categories"
import { product } from "@data/components/products"
import LiquidationPromo from "@comp/UI/LiquidationPromo/LiquidationPromo";
import Footer from "@comp/UI/Footer/Footer";

export default function Page() {
  return <main>
    <Hero />
    <AdTypeA />
    <CategoryGrid categories={categories} />
    <AdTypeB />
    <ProductList products={product}/>
    <LiquidationPromo />
    <Footer />
  </main>;
}
